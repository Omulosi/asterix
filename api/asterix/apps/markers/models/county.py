from django.contrib.gis.db import models


class County(models.Model):
    counties = models.CharField(max_length=25)
    codes = models.IntegerField()
    cty_code = models.CharField(max_length=24)
    geom = models.MultiPolygonField(srid=4326)

    class Meta:
        verbose_name_plural = "Counties"
