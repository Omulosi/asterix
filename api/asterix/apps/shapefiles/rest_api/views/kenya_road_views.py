"""Kenya road views."""

from rest_framework import generics
from asterix.apps.shapefiles.models import KenyaRoad
from asterix.apps.shapefiles.rest_api.serializers import KenyaRoadSerializer


class KenyaRoadList(generics.ListAPIView):
    """
    API view to retrieve list of counties
    """
    queryset = KenyaRoad.objects.all()
    serializer_class = KenyaRoadSerializer


class KenyaRoadDetail(generics.RetrieveDestroyAPIView):
    """
    API view to retrieve one county
    """
    queryset = KenyaRoad.objects.all()
    serializer_class = KenyaRoadSerializer
