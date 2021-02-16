from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .api import ResearcherFileAPI

urlpatterns = [
    path('', include('frontend.urls')),
    path('payment/execute/', include('frontend.urls')),
    path('api/admin/', admin.site.urls),
    path('api/account/', include("accounts.urls")),
    path('api/research/', include("researches.urls")),
    path('api/events/', include("events.urls")),
    path('api/addins/', include("sitecomponents.urls")),
    path('user/', include('frontend.urls')),
    path('media/researcher/<path>/<id>/<file>/',
         ResearcherFileAPI.as_view({"get": "list"})),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
