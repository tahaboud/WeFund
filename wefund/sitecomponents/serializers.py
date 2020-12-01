from .models import WeFund, Adds, Donation
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
