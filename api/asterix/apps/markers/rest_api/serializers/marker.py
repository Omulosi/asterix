from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer

from asterix.apps.markers.models.marker import Marker


class MarkerSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Marker
        geo_field = "location"
        auto_bbox = True
        fields = '__all__'


