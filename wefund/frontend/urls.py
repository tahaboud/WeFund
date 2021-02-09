from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('confirm-email/<pk>/<token>/', views.emailConfirmation),
    path('reset-password/<pk>/<token>/', views.emailConfirmation),
]
