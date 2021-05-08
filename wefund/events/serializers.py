from rest_framework import serializers
from .models import Events, Attendants
from rest_framework.validators import UniqueTogetherValidator


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"

    def validate(self, validated_data):
        try:
            int(validated_data["spots"])
            try:
                int(validated_data["price"])
                return validated_data
            except ValueError:
                raise serializers.ValidationError(
                    {"spots": "Please ensure that spots is a numerical value"})
        except ValueError:
            raise serializers.ValidationError(
                {"price": "Please ensure that price is a numerical value"})


class AttendantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendants
        fields = ("id", "first_name", "last_name",
                  "email", "phone_number", "id_number", "event")
        validators = [
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=("event", "email"),
                message="This email already signed up for this event"
            ),
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=("event", "phone_number"),
                message="This phone number already signed up for this event"
            ),
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=("event", "id_number"),
                message="This id number already signed up for this event"
            )
        ]

    def validate(self, validated_data):
        try:
            int(validated_data["phone_number"])
            int(validated_data["id_number"])
            return validated_data
        except ValueError:
            raise serializers.ValidationError(
                {"Phone number / Id number": "Please ensure that Phone number and Id number are numerical values"})
