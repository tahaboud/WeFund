from .models import WeFund, Adds, Donation, ContactUs
from rest_framework import serializers


class AdminWeFundSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeFund
        fields = "__all__"

    def validate(self, validated_data):
        try:
            int(validated_data["phone_number"])
            return validated_data
        except ValueError:
            raise serializers.ValidationError(
                {"Phone Number": "Please enter a valid phone number"})


class WeFundSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeFund
        fields = "__all__"
        read_only_fields = ("name", "description", "address",
                            "logo", "email", "phone_number")


class AddsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adds
        fields = "__all__"


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = "__all__"

    def validate(self, validated_data):
        try:
            int(validated_data["price"])
            return validated_data
        except ValueError:
            raise serializers.ValidationError(
                {"price": "please enter a valid price"})


class ZoomSerializer(serializers.Serializer):
    role = serializers.BooleanField()

    def validate(self, validated_data):
        if not isinstance(validated_data["role"], bool):
            raise serializers.ValidationError(
                {"role": "This field must be a boolean"})

        return validated_data


class PaypalSerializer(serializers.Serializer):
    name = serializers.CharField()
    price = serializers.CharField()
    quantity = serializers.IntegerField()

    def validate(self, validated_data):
        try:
            int(validated_data["price"])
            return validated_data
        except ValueError:
            raise serializers.ValidationError(
                {"price": "please enter a valid price"})


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactUs
        fields = ("name", "email", "message")
