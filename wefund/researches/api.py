from rest_framework import generics, permissions, viewsets, serializers, status
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Research
from .serializers import UserResearchSerializer, AdminResearchSerializer


class IsSuperUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_superuser


class UserResearchAPI(viewsets.ModelViewSet):
    serializer_class = UserResearchSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def list(self, request):
        if hasattr(request.user, "researcher"):
            if hasattr(request.user.researcher, "research"):
                research = Research.objects.get(
                    researcher=request.user.researcher)
                serializer = UserResearchSerializer(research)
                return Response(serializer.data)
            raise serializers.ValidationError(
                {"user": "this user does not have a research"})
        raise serializers.ValidationError(
            {"user": "this user is not a researcher"})

    def perform_create(self, serializer):
        if hasattr(self.request.user, "researcher"):
            if hasattr(self.request.user.researcher, "research"):
                raise serializers.ValidationError(
                    {"user": "this user already have a research"})
            serializer.save(researcher=self.request.user.researcher)
            return Response(serializer.data)
        raise serializers.ValidationError(
            {"user": "this user is not a researcher"})

    def update(self, request):
        research = Research.objects.get(researcher=request.user.researcher)
        serializer = UserResearchSerializer(research, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminResearchAPI(viewsets.ModelViewSet):
    serializer_class = AdminResearchSerializer
    permission_classes = [permissions.IsAdminUser, ]

    def retrieve(self, request, pk):
        research = Research.objects.get(pk=pk)
        serializer = AdminResearchSerializer(research)
        return Response(serializer.data)

    def update(self, request, pk):
        research = Research.objects.get(pk=pk)
        serializer = AdminResearchSerializer(research, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
