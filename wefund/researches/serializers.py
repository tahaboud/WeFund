from rest_framework import serializers
from .models import Research

# USER SERIALIZER


class RegisterResearch(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = ["title", "search_type", "search_date",
                  "source", "description", "help_type", "help_details"]
