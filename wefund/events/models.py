from django.db import models


def upload_location(instance, filename):
    file_path = "accounts/{event_id}/{filename}".format(
        event_id=str(instance.id), filename=filename)
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
