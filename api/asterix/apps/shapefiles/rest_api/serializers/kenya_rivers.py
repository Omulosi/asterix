from rest_framework_gis.serializers import GeoFeatureModelSerializer
from asterix.apps.shapefiles.models import KenyaRiver


class KenyaRiverSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = KenyaRiver
        geo_field = "geom"
        fields = '__all__'
