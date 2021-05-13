from django.db import models
from django.dispatch import receiver
import os
from time import time_ns


def upload_location(instance, filename):
    filename = filename.split(".")[-1]
    file_path = "events/{event_name}/{filename}".format(
        event_name=str(instance.name), filename=str(time_ns())+"."+filename)
    return file_path


class Events(models.Model):
    name = models.CharField(max_length=100, unique=True,
                            blank=False, null=False)
    image = models.ImageField(
        upload_to=upload_location, blank=False, null=False)
    description = models.CharField(max_length=100, blank=False, null=False)
    spots = models.CharField(max_length=100, blank=False, null=False)
    is_free = models.BooleanField()
    price = models.CharField(max_length=100, blank=False, null=False)
    category = models.CharField(max_length=100, blank=False, null=False)
    is_online = models.BooleanField()
    location = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.name


class Attendants(models.Model):
    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    email = models.EmailField(
        max_length=100, blank=False, null=False)
    phone_number = models.CharField(max_length=50, blank=False, null=False)
    id_number = models.CharField(max_length=50, blank=False, null=False)
    is_accepeted = models.BooleanField(default=False)
    event = models.ForeignKey(
        Events, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["event", "email"], name="unique_booking"),
            models.UniqueConstraint(
                fields=["event", "id_number"], name="unique_booking1"),
            models.UniqueConstraint(
                fields=["event", "phone_number"], name="unique_booking2"),
        ]

    def __str__(self):
        return self.first_name + " " + self.last_name


@receiver(models.signals.post_delete, sender=Events)
def auto_delete_file_on_delete(sender, instance, **kwargs):

    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)


@receiver(models.signals.pre_save, sender=Events)
def auto_delete_file_on_change(sender, instance, **kwargs):

    if not instance.pk:
        return False

    try:
        old_file = Events.objects.get(pk=instance.pk).image
    except Events.DoesNotExist:
        return False

    new_file = instance.image
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)
