from django.urls import path
from .api import UserResearchAPI, AdminResearchAPI


urlpatterns = [
    path("",
         UserResearchAPI.as_view({'post': 'create', "get": "list", "put": "update"})),
    path(
        "<pk>/", AdminResearchAPI.as_view({"post": "update", "get": "retrieve"}))
]
