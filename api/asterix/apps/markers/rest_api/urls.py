from django.urls import path

from .views import marker_views

urlpatterns = [
    path('markers/', marker_views.MarkerList.as_view(),
         name='api-marker-list'),
]
