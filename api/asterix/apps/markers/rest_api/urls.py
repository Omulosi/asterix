from django.urls import path

from .views import marker_views

urlpatterns = [
    path('markers/', marker_views.MarkerListCreateAPIView.as_view(),
         name='api-marker-list'),
]
