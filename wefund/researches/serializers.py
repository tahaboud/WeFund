from rest_framework import serializers
from .models import Research
from accounts.serializers import UserSerializer


class UserResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = ("id", "title", "user_type", "looking_for",
                  "interested_in", "description", "organization", "papers", "admin_review",
                  "admin_decision", "admin_appointment")
        read_only_fields = ('id', "admin_review",
                            "admin_decision", "admin_appointment")


class AdminResearchSerializer(serializers.ModelSerializer):
    researcher = serializers.StringRelatedField()

    class Meta:
        model = Research
        fields = ("id", "researcher", "title", "user_type", "looking_for",
                  "interested_in", "description", "organization", "papers", "admin_review",
                  "admin_decision", "admin_appointment")
        read_only_fields = ("id", "researcher", "title", "user_type", "looking_for",
                            "interested_in", "description", "organization", "papers",)
