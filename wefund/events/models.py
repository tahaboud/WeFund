from django.db import models

# Create your models here.


class Events(models.Model):
    name = models.CharField(max_length=100, unique=True,
                            blank=False, null=False)
    image = models.ImageField(null=True)
    description = models.CharField(max_length=100, blank=False, null=False)
    spots = models.IntegerField(blank=False, null=False)
    is_free = models.BooleanField()
    price = models.IntegerField(blank=False, null=False)
    category = models.CharField(max_length=100, blank=False, null=False)
    is_online = models.BooleanField()
    location = models.CharField(max_length=100, blank=False, null=False)


class Attendants(models.Model):
    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    email = models.EmailField(
        max_length=100, blank=False, null=False)
    phone_number = models.IntegerField(blank=False, null=False)
    id_number = models.IntegerField(blank=False, null=False)
    is_accepeted = models.BooleanField(default=False)
    event = models.ForeignKey(
        Events, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["event", "email"], name="unique_booking"),
            models.UniqueConstraint(
                fields=["event", "id_number"], name="unique_booking1"),
            models.UniqueConstraint(
                fields=["event", "phone_number"], name="unique_booking2"),
        ]
