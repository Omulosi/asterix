from django.contrib.gis.db import models as gis_models


class County(gis_models.Model):
    name = gis_models.CharField(max_length=25)
    code = gis_models.IntegerField()
    city_code = gis_models.CharField(max_length=24)
    geom = gis_models.MultiPolygonField(srid=4326)

    class Meta:
        verbose_name_plural = "Counties"
