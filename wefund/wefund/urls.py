from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from .api import ResearcherFileAPI, EventsFileAPI, AdminResearcherFileAPI

urlpatterns = [
    path('', include('frontend.urls')),
    path('login/', include('frontend.urls')),
    path('api/admin/', admin.site.urls),
    path('api/account/', include("accounts.urls")),
    path('api/research/', include("researches.urls")),
    path('api/events/', include("events.urls")),
    path('api/addins/', include("sitecomponents.urls")),
    path('user/', include('frontend.urls')),
    path('media/researcher/<str:path>/<str:id>/<str:file>/<str:token>/',
         ResearcherFileAPI.as_view({"get": "list"})),
    path('media/events/<eventName>/<file>/',
         EventsFileAPI.as_view({"get": "list"})),
    path('admin/media/<str:pk>/researcher/<str:path>/<str:id>/<str:file>/<str:token>/',
         AdminResearcherFileAPI.as_view({"get": "list"})),
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
