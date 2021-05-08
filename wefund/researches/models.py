from django.db import models
from accounts.models import Account, Researcher
from .formatChecker import ContentTypeRestrictedFileField
from django.dispatch import receiver
import os


def upload_location_paper(instance, filename):
    file_path = "researcher/research/{user_id}/{filename}".format(
        user_id=str(instance.researcher.user.id), filename=filename)
    return file_path


class Research(models.Model):
    USER_TYPE_CHOICES = [
        ("INV", "Investor"),
        ("PIH", "Project Idea Holder"),
        ("AAS", "Researcher With Academic Applied Study")
    ]

    USER_LOOKING_FOR = [
        ("INV", "Investments"),
        ("RAC", "ResearchTeams/Academic/Collaborators"),
        ("FAG", "Funding And Grants")
    ]

    USER_INTERESTED_IN = [
        ("CSRR", "Copyright Saving / Research Registration"),
        ("QHRA", "Quality Human Resources Abilities"),
        ("IFLO", "International Focused Learning Oprotunities")
    ]

    researcher = models.OneToOneField(Researcher, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=3, choices=USER_TYPE_CHOICES)
    looking_for = models.CharField(max_length=3, choices=USER_LOOKING_FOR)
    interested_in = models.CharField(max_length=4, choices=USER_INTERESTED_IN)
    title = models.CharField(max_length=100, blank=False, null=False)
    organization = models.CharField(max_length=100, blank=False, null=False)
    papers = ContentTypeRestrictedFileField(upload_to=upload_location_paper, content_types=[
                                            'application/pdf', "image/*"], max_upload_size=5242880, blank=False, null=False)
    description = models.CharField(max_length=500, blank=False, null=False)
    admin_review = models.CharField(
        max_length=200, default='Not reviewed yet', blank=False, null=False)
    admin_decision = models.BooleanField(default=False)
    admin_appointment = models.DateTimeField(
        blank=True, null=False, default="1111-11-11 11:11")

    def __str__(self):
        return self.title


@receiver(models.signals.post_delete, sender=Research)
def auto_delete_file_on_delete(sender, instance, **kwargs):

    if instance.papers:
        if os.path.isfile(instance.papers.path):
            os.remove(instance.papers.path)

    if instance.papers:
        if os.path.isfile(instance.papers.path):
            os.remove(instance.papers.path)


@receiver(models.signals.pre_save, sender=Research)
def auto_delete_paper_file_on_change(sender, instance, **kwargs):

    if not instance.pk:
        return False

    try:
        paper_old_file = Research.objects.get(pk=instance.pk).papers
    except Research.DoesNotExist:
        return False

    paper_new_file = instance.papers
    if not paper_old_file == paper_new_file:
        if os.path.isfile(paper_old_file.path):
            os.remove(paper_old_file.path)
