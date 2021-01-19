"""Kenya river views."""

from rest_framework import generics
from asterix.apps.shapefiles.models import KenyaRiver
from asterix.apps.shapefiles.rest_api.serializers import KenyaRiverSerializer


class KenyaRiverList(generics.ListAPIView):
    """
    API view to retrieve list of counties
    """
    queryset = KenyaRiver.objects.all()
    serializer_class = KenyaRiverSerializer


class KenyaRiverDetail(generics.RetrieveDestroyAPIView):
    """
    API view to retrieve one county
    """
    queryset = KenyaRiver.objects.all()
    serializer_class = KenyaRiverSerializer
