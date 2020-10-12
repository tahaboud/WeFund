from django.db import models
from accounts.models import Account, Researcher


def upload_location(instance, filename):
    file_path = "accounts/{user_id}/{filename}".format(
        user_id=str(instance.id), filename=filename)
    return file_path


class Research(models.Model):
    researcher = models.OneToOneField(Researcher, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=True)
    search_type = models.CharField(max_length=100, blank=False, null=True)
    search_date = models.DateField(blank=False, null=True)
    source = models.CharField(max_length=100, blank=False, null=True)
    description = models.CharField(max_length=300, blank=False, null=True)
    help_type = models.CharField(max_length=100, blank=False, null=True)
    help_details = models.CharField(max_length=300, blank=False, null=True)
    admin_review = models.CharField(
        max_length=200, default='Not reviewed yet', blank=False, null=True)
    admin_decision = models.BooleanField(default=False)
    admin_appointment = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.researcher.user.username
