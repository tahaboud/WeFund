from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/admin/', admin.site.urls),
    path('api/account/', include("accounts.urls")),
    path('api/research/', include("researches.urls")),
    path('api/events/', include("events.urls")),
    path('api/addins/', include("sitecomponents.urls")),
]
