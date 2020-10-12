from rest_framework import generics, permissions, viewsets, serializers
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Researcher
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, RegisterAdminSerializer, RegisterResearcherSerializer


class IsSuperUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_superuser


class IsResearcher(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.researcher


# REGISTER API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# LOGIN API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# GET USER API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# REGISTER ADMIN API


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
            "token": AuthToken.objects.create(user)[1]
        })


class RegisterResearcherAPI(viewsets.ModelViewSet):
    serializer_class = RegisterResearcherSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_queryset(self):
        return self.request.user.researcher

    def perform_create(self, serializer):
        if hasattr(self.request.user, "researcher"):
            raise serializers.ValidationError(
                {"user": "this user is already a researcher"})
        serializer.save(user=self.request.user)
