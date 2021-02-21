from rest_framework import generics, permissions, viewsets, serializers, status
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Researcher, Account
from .serializers import UserSerializer, RegisterUserSerializer, LoginSerializer, RegisterAdminSerializer, ResearcherSerializer, AdminResearcherSerializer, AdminUserSerializer, ResetPasswordSerializer, SendEmailSerializer, CheckTokenSerializer
from django.core.mail import EmailMessage
from .utils import generate_token
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.template.loader import render_to_string
from django.conf import settings
from django.utils import timezone
import requests


class IsSuperUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_superuser


class CreateResearcher(permissions.BasePermission):

    def has_permission(self, request, view):
        return view.action == "create"


class RegisterUserAPI(viewsets.ModelViewSet):
    serializer_class = RegisterUserSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            current_site = "127.0.0.1:8000"
            email_subject = "Activate your account"
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = generate_token.make_token(user)
            message = render_to_string("accounts/Register_email_message.html", {
                "user": user.first_name,
                "domain": current_site,
                "uid": uid,
                "token": token,
            })
            email_message = EmailMessage(
                email_subject,
                message,
                settings.EMAIL_HOST_USER,
                [user.email],
            )
            email_message.content_subtype = "html"
            email_message.send(fail_silently=False)
            return Response({
                "user": "Email verification sent",
                "email": user.email
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivateUserAPI(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def update(self, request, pk, token):
        try:
            uid = force_text(urlsafe_base64_decode(pk))
            user = Account.objects.get(pk=uid)

        except Exception as identifier:
            user = None

        if user is not None and generate_token.check_token(user, token):
            user.is_active = True
            user.last_login = timezone.now()
            user.save()
            generate_token.check_token(user, token)
            return Response({"Activation": "Account activated succefully"})

        return Response({"user": "Account failed to activate"}, status=status.HTTP_400_BAD_REQUEST)


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        is_researcher = hasattr(user, "researcher")
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "is_researcher": is_researcher,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def retrieve(self, request):
        user = self.request.user
        return Response({"User": UserSerializer(user).data, "is_researcher": hasattr(request.user, "researcher")})

    def update(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request):
        user = Account.objects.get(email=request.user.email)
        user.delete()
        return Response({"Account": "Account deleted seccefully"})


class RegisterAdminAPI(generics.GenericAPIView):
    serializer_class = RegisterAdminSerializer

    permission_classes = [
        IsSuperUser,
    ]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
        })


class ResearcherAPI(viewsets.ModelViewSet):
    serializer_class = ResearcherSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def list(self, request):
        if not hasattr(self.request.user, "researcher"):
            raise serializers.ValidationError(
                {"User": "This user is not a researcher"})
        researcher = Researcher.objects.get(user=request.user)
        serializer = ResearcherSerializer(researcher)
        return Response(serializer.data)

    def perform_create(self, serializer):
        if hasattr(self.request.user, "researcher"):
            raise serializers.ValidationError(
                {"User": "This user is already a researcher"})
        serializer.save(user=self.request.user)

    def update(self, request):
        researcher = Researcher.objects.get(user=request.user)
        serializer = ResearcherSerializer(
            researcher, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminAPI(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAdminUser,)

    def list(self, request):
        users = Account.objects.all()
        result = []
        for user in users:
            fullUserData = {}
            userData = AdminUserSerializer(user)
            fullUserData.update({"user": userData.data})
            if hasattr(user, "researcher"):
                researcher = Researcher.objects.get(user=user)
                researcherData = AdminResearcherSerializer(researcher)
                fullUserData.update({"researcher": researcherData.data})
            else:
                fullUserData.update({"researcher":
                                     "This user is not a researcher"})
            result.append(fullUserData)
        return Response(result)

        serializerResearcher = AdminUserResearcherSerializer(
            researchers, many=True)
        return Response(serializerResearcher.data)

    def retrieve(self, request, pk=None):
        try:
            user = Account.objects.get(pk=pk)
            researcher = Researcher.objects.get(user=user)
            serializerUser = AdminUserSerializer(user)
            serializerResearcher = AdminResearcherSerializer(researcher)
            return Response({"user": serializerUser.data, "researcher": serializerResearcher.data})
        except Account.DoesNotExist:
            raise serializers.ValidationError({"User": "User does not exist"})
        except Researcher.DoesNotExist:
            user = Account.objects.get(pk=pk)
            serializerUser = AdminUserSerializer(user)
            return Response(serializerUser.data)

    def update(self, request, pk):
        user = Researcher.objects.get(pk=pk).user
        new = False
        if not user.is_validated:
            new = True
        serializer = AdminUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            if new:
                try:
                    if request.data["is_validated"] == True:
                        current_site = "127.0.0.1:8000"
                        email_subject = "Account Validated"
                        message = render_to_string("accounts/userValidated.html", {
                            "user": user.first_name,
                        })
                        email_message = EmailMessage(
                            email_subject,
                            message,
                            settings.EMAIL_HOST_USER,
                            [user.email],
                        )
                        email_message.content_subtype = "html"
                        email_message.send(fail_silently=False)

                except KeyError:
                    pass
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetRequestAPI(viewsets.ModelViewSet):
    serializer_class = SendEmailSerializer

    def create(self, request):
        try:
            users = Account.objects.all()
            serializer = self.get_serializer(users, data=request.data)
            if serializer.is_valid():
                user = Account.objects.get(email=request.data["email"])
                current_site = "127.0.0.1:8000"
                email_subject = "Reset your password"
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                token = generate_token.make_token(user)
                message = render_to_string("accounts/Reset_email_message.html", {
                    "user": user,
                    "domain": current_site,
                    "uid": uid,
                    "token": token,
                })
                print(token)
                email_message = EmailMessage(
                    email_subject,
                    message,
                    settings.EMAIL_HOST_USER,
                    [user.email],
                )
                email_message.content_subtype = "html"
                email_message.send(fail_silently=True)
                return Response({
                    "user": "Reset password email sent"
                })
            return Response(serializer.errors)
        except Account.DoesNotExist:
            return Response({"user": "user does not exist"}, status=status.HTTP_400_BAD_REQUEST)


class UserPasswordUpdateAPI(viewsets.ModelViewSet):
    serializer_class = ResetPasswordSerializer

    def update(self, request, pk, token):
        try:
            uid = force_text(urlsafe_base64_decode(pk))
            user = Account.objects.get(pk=uid)

        except Exception as identifier:
            user = None

        if user is not None and generate_token.check_token(user, token):
            serializer = self.get_serializer(user, data=request.data)
            if serializer.is_valid():
                if request.data["password1"] != request.data["password2"]:
                    raise serializers.ValidationError("Password do not match")
                else:
                    user.set_password(request.data["password1"])
                    user.last_login = timezone.now()
                    user.save()
                    return Response({"Activation": "Password reset is succesful"})
            return Response(serializer.errors)

        return Response({"user": "Account password failed to reset"}, status=status.HTTP_400_BAD_REQUEST)


class CheckTokenAPI(viewsets.ModelViewSet):
    serializer_class = CheckTokenSerializer

    def list(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                uid = force_text(urlsafe_base64_decode(request.data["pk"]))
                user = Account.objects.get(pk=uid)

            except Exception as identifier:
                user = None

            if user is not None and generate_token.check_token(user, request.data["token"]):
                return Response({"token": "Token is valid"})

            return Response({"token": "Token is not valid"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
