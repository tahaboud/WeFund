from django.contrib import admin
from .models import Events
from .models import Attendants
admin.site.register(Events)
admin.site.register(Attendants)