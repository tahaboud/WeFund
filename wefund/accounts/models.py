from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.core.mail import EmailMessage
from django.conf import settings


def upload_location(instance, filename):
    file_path = "accounts/{user_id}/{filename}".format(
        user_id=str(instance.id), filename=filename)
    return file_path


class MyAccountManager(BaseUserManager):

    def create_user(self, first_name, last_name, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        if not first_name:
            raise ValueError("Users must have a first_name")

        if not last_name:
            raise ValueError("Users must have a last_name")

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            username=first_name.lower()+last_name.lower()
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.is_validated = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    def create_admin(self, email, first_name, last_name, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        user.is_active = True
        user.is_admin = True
        user.is_validated = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(
        max_length=50, blank=False, null=False, unique=False)
    date_joined = models.DateTimeField(
        verbose_name="date joined", auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    first_name = models.CharField(max_length=30, blank=False, null=False)
    last_name = models.CharField(max_length=30, blank=False, null=False)
    is_validated = models.BooleanField(default=False)
    last_login = models.DateTimeField(
        verbose_name="last login", auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = MyAccountManager()

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class Researcher(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_card_number = models.CharField(max_length=50, blank=False, null=False)
    id_card_copy = models.ImageField(
        upload_to=upload_location, blank=False, null=False)
    date_of_birth = models.DateField(blank=False, null=False)
    degree = models.CharField(blank=False, null=False, max_length=100)
    organisation = models.CharField(blank=False, null=False, max_length=100)
    cv = models.FileField(blank=False, null=False)

    def __str__(self):
        return self.user.username
