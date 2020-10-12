from rest_framework import serializers
from .models import Account, Researcher
from django.contrib.auth import authenticate

# USER SERIALIZER


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("id", "username", "email")

# REGISTER SERIALIZER


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = Account.objects.create_user(
            validated_data["first_name"], validated_data["last_name"], validated_data["email"], validated_data["password"])

        return user

# LOGIN SERIALIZER


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user

        raise serializers.ValidationError("Incorrect Credentials")


class RegisterAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = Account.objects.create_admin(
            validated_data["first_name"], validated_data["last_name"], validated_data["email"], validated_data["password"])

        return user


# REGISTER RESEARCHER SERIALIZER


class RegisterResearcherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Researcher
        fields = ["id_card_number", "id_card_copy",
                  "date_of_birth", "degree", "organisation", "cv"]
