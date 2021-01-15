
"""Markers view."""

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from asterix.apps.markers.models.marker import Marker
from asterix.apps.markers.rest_api.serializers.marker import MarkerSerializer


class MarkerList(APIView):
    """
    API view to retrieve list of markers or create new
    """
    serializer_class = MarkerSerializer

    def get(self, request, version):
        markers = Marker.objects.all()
        data = MarkerSerializer(markers, many=True).data
        return Response(data)

    def post(self, request, version):
        print("===============================");
        print(request.data)
        return Response("saved new features");
