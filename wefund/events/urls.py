from django.urls import path, include
from .api import EventAPI, AttendantsAPI


urlpatterns = [
    path("", EventAPI.as_view(
        {"get": "list", "post": "create"})),
    path("<pk>/", EventAPI.as_view({"delete": "destroy"})),
    path("<pk>/subs/", AttendantsAPI.as_view({"get": "list",
                                              "post": "create"})),
]
