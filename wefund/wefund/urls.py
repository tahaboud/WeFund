from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('account/', include("accounts.urls")),
    path('research/', include("researches.urls")),
    path('events/', include("events.urls")),
    
]
