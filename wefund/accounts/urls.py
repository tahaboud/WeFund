from rest_framework import routers
from .api import RegisterAdminAPI, RegisterUserAPI, LoginAPI, UserAPI, ResearcherAPI, AdminAPI, ActivateUserAPI, PasswordResetRequestAPI, UserPasswordUpdateAPI, CheckTokenAPI
from django.urls import path, include
from knox import views as knox_views

app_name = "accounts"


urlpatterns = [
    path("user/register/", RegisterUserAPI.as_view({"post": "create"})),
    path("user/", UserAPI.as_view({"get": "retrieve",
                                   "post": "update", "delete": "destroy"})),
    path("researcher/",
         ResearcherAPI.as_view({"get": "list", "post": "create", "put": "update"})),
    path("admin/register", RegisterAdminAPI.as_view()),
    path("admin/users/<pk>/",
         AdminAPI.as_view({"get": "retrieve", "post": "update"})),
    path("admin/users/", AdminAPI.as_view({"get": "list"})),
    path("login/", LoginAPI.as_view()),
    path("logout/", knox_views.LogoutView.as_view(), name="knox_logout"),
    path("user/activate/<pk>/<token>/",
         ActivateUserAPI.as_view({"post": "update"}), name="activate"),
    path("password-reset/",
         PasswordResetRequestAPI.as_view({"post": "create"})),
    path("password-reset/<pk>/<token>/",
         UserPasswordUpdateAPI.as_view({"post": "update"})),
    path("check/", CheckTokenAPI.as_view({"post": "list"})),
]
