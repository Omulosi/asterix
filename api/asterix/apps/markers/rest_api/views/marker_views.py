
"""Markers view."""

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from asterix.apps.markers.models.marker import Marker
from asterix.apps.markers.rest_api.serializers.marker import MarkerSerializer


class MarkerListCreateAPIView(ListCreateAPIView):
    """
    API view to retrieve list of markers or create new
    """
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer
