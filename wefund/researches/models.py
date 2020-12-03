from django.db import models
from accounts.models import Account, Researcher


class Research(models.Model):
    researcher = models.OneToOneField(Researcher, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    search_type = models.CharField(max_length=100, blank=False, null=False)
    search_date = models.DateField(blank=False, null=False)
    source = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=300, blank=False, null=False)
    help_type = models.CharField(max_length=100, blank=False, null=False)
    help_details = models.CharField(max_length=300, blank=False, null=False)
    admin_review = models.CharField(
        max_length=200, default='Not reviewed yet', blank=False, null=False)
    admin_decision = models.BooleanField(default=False)
    admin_appointment = models.DateTimeField(blank=True, null=False)

    def __str__(self):
        return self.title
