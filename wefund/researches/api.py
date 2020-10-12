from rest_framework import generics, permissions, viewsets, serializers
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Research
from .serializers import RegisterResearch


class RegisterResearchAPI(viewsets.ModelViewSet):
    serializer_class = RegisterResearch
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_queryset(self):
        return self.request.user.researcher

    def perform_create(self, serializer):
        if hasattr(self.request.user, "researcher"):
            if hasattr(self.request.user.researcher, "research"):
                raise serializers.ValidationError(
                    {"user": "this user already have a research"})
        serializer.save(researcher=self.request.user.researcher)
