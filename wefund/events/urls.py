from django.urls import path, include
from .api import EventAPI, AttendantsAPI, EventDetailAPI


urlpatterns = [
    path("", EventAPI.as_view(
        {"get": "list", "post": "create"})),
    path(
        "<pk>/", EventDetailAPI.as_view({"get": "list", "delete": "destroy", "put": "update"})),
    path("<pk>/subs/", AttendantsAPI.as_view({"get": "list",
                                              "post": "create"})),
]
