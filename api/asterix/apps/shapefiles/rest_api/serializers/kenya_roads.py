from rest_framework_gis.serializers import GeoFeatureModelSerializer
from asterix.apps.shapefiles.models import KenyaRoad


class KenyaRoadSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = KenyaRoad
        geo_field = "geom"
        fields = '__all__'
