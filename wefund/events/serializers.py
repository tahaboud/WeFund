from rest_framework import serializers
from .models import Events, Attendants
from rest_framework.validators import UniqueTogetherValidator

# EVENT SERIALIZER


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"


class AttendantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendants
        fields = ["first_name", "last_name",
                  "email", "phone_number", "id_number", "event"]
        validators = [
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=["event", "email"],
                message="This email already signed up for this event"
            ),
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=["event", "phone_number"],
                message="This phone number already signed up for this event"
            ),
            UniqueTogetherValidator(
                queryset=Attendants.objects.all(),
                fields=["event", "id_number"],
                message="This id number already signed up for this event"
            )
        ]
