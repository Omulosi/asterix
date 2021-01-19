from rest_framework_gis.serializers import GeoFeatureModelSerializer
from asterix.apps.shapefiles.models import County


class CountySerializer(GeoFeatureModelSerializer):
    class Meta:
        model = County
        geo_field = "geom"
        fields = '__all__'
