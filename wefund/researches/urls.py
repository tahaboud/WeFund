from django.urls import path
from .api import UserResearchAPI, AdminResearchAPI


urlpatterns = [
    path("",
         UserResearchAPI.as_view({'post': 'create', "get": "list", "put": "update"})),
    path(
        "admin/<pk>/", AdminResearchAPI.as_view({"post": "update", "get": "retrieve"})),
    path("admin/", AdminResearchAPI.as_view({"get": "list"}))
]
