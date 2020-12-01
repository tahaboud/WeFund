from django.urls import path
from .api import WeFundAPI, DonationAPI, AddsAPI, AdminWeFundAPI


urlpatterns = [
    path("wefund/", WeFundAPI.as_view({"get": "retrieve"})),
    path(
        "admin/wefund/", AdminWeFundAPI.as_view({"post": "create", "put": "update"})),
    path("donation/", DonationAPI.as_view({"post": "create", "get": "list"})),
    path("adds/", AddsAPI.as_view({"post": "create",
                                   "get": "list", "put": "update", "delete": "destroy"})),
]
