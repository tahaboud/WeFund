from rest_framework import serializers
from .models import Research


class UserResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = ("id", "title", "search_type", "search_date",
                  "source", "description", "help_type", "help_details", "admin_review",
                  "admin_decision", "admin_appointment")
        read_only_fields = ('id', "admin_review",
                            "admin_decision", "admin_appointment")


class AdminResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = ("id", "title", "search_type", "search_date",
                  "source", "description", "help_type", "help_details", "admin_review",
                  "admin_decision", "admin_appointment")
        read_only_fields = ("id", "title", "search_type", "search_date",
                            "source", "description", "help_type", "help_details")
