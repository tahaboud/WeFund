from django.urls import path
from .api import RegisterResearchAPI


urlpatterns = [
    path("register/", RegisterResearchAPI.as_view({'post': 'create'}))
]
