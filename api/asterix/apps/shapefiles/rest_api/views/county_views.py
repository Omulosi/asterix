"""County view."""

from rest_framework import generics
from asterix.apps.shapefiles.models import County
from asterix.apps.shapefiles.rest_api.serializers import CountySerializer


class CountyList(generics.ListAPIView):
    """
    API view to retrieve list of counties
    """
    queryset = County.objects.all()
    serializer_class = CountySerializer


class CountyDetail(generics.RetrieveDestroyAPIView):
    """
    API view to retrieve one county
    """
    queryset = County.objects.all()
    serializer_class = CountySerializer
