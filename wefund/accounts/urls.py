from rest_framework import routers
from .api import RegisterAPI, LoginAPI, UserAPI, RegisterAdminAPI, RegisterResearcherAPI
from django.urls import path, include
from knox import views as knox_views


urlpatterns = [
    path("api/auth", include("knox.urls")),
    path("register/", RegisterAPI.as_view()),
    path("registeradmin/", RegisterAdminAPI.as_view()),
    path("registerresearcher/",
         RegisterResearcherAPI.as_view({'post': 'create'})),
    path("login/", LoginAPI.as_view()),
    path("user/", UserAPI.as_view()),
]
