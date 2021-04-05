from django.db import models


def upload_location(instance, filename):
    file_path = "addins/{add_id}/{filename}".format(
        add_id=str(instance.id), filename=filename)
    return file_path


class WeFund(models.Model):
    name = models.CharField(max_length=100, blank=False,
                            null=True)
    description = models.CharField(
        max_length=500, blank=False, null=True)
    address = models.CharField(
        max_length=100, blank=False, null=True)
    logo = models.URLField(blank=False, null=False,)
    email = models.EmailField(
        max_length=100, blank=False, null=False)
    phone_number = models.CharField(max_length=50,
                                    blank=False, null=False)


class Adds(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=500, blank=False, null=False)
    image = models.ImageField(
        upload_to=upload_location, blank=False, null=False)


class Donation(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    date = models.DateField(blank=False, null=False)
    price = models.CharField(max_length=50, blank=False, null=False)
