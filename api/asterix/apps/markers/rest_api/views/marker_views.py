
"""Markers view."""

from rest_framework import generics, viewsets

from asterix.apps.markers.models.marker import Marker
from asterix.apps.markers.rest_api.serializers.marker import MarkerSerializer

class MarkerViewSet(viewsets.ModelViewSet):
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer


class MarkerList(generics.ListCreateAPIView):
    """
    API view to retrieve list of markers or create new
    """
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer


class MarkerDetail(generics.RetrieveDestroyAPIView):
    """
    API view to retrieve one marker
    """
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer
