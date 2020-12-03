from rest_framework import serializers
from .models import Account, Researcher
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("id", "username", "email",
                  "is_admin", "first_name", "last_name", "is_validated")
        read_only_fields = ("id", "username", "is_validated")


class RegisterUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = Account.objects.create_user(
            validated_data["first_name"], validated_data["last_name"], validated_data["email"], validated_data["password"])

        return user


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


class ResearcherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Researcher
        fields = ("id_card_number", "id_card_copy",
                  "date_of_birth", "degree", "organisation", "cv")

    def validate(self, validated_data):
        try:
            int(validated_data["id_card_number"])

        except ValueError:
            raise serializers.ValidationError(
                {"Id card number": "Please ensure that the id card number is only numbers"})


class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("id", "username", "email", "first_name",
                  "last_name", "is_admin", "is_validated")
        read_only_fields = ("id", "username", "email",
                            "first_name", "last_name")


class AdminResearcherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Researcher
        fields = ("id_card_number", "id_card_copy",
                  "date_of_birth", "degree", "organisation", "cv")
        read_only_fields = ("id_card_number", "id_card_copy",
                            "date_of_birth", "degree", "organisation", "cv")


class ResetPasswordSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField()
    password2 = serializers.CharField()

    class Meta:
        model = Account
        fields = ("password1", "password2")


class SendEmailSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = Account
        fields = ("email",)


class CheckTokenSerializer(serializers.Serializer):
    pk = serializers.CharField()
    token = serializers.CharField()
