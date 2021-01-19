from django.contrib.gis.db import models


class KenyaRoad(models.Model):
    fnode_field = models.BigIntegerField()
    tnode_field = models.BigIntegerField()
    lpoly_field = models.BigIntegerField()
    rpoly_field = models.BigIntegerField()
    length = models.FloatField()
    kenroad_field = models.BigIntegerField()
    kenroad_id = models.BigIntegerField()
    geom = models.MultiLineStringField(srid=4326)

    class Meta:
        verbose_name_plural = "kenya roads"


# Auto-generated `LayerMapping` dictionary for KenyaRoad model
kenyaroad_mapping = {
    'fnode_field': 'FNODE_',
    'tnode_field': 'TNODE_',
    'lpoly_field': 'LPOLY_',
    'rpoly_field': 'RPOLY_',
    'length': 'LENGTH',
    'kenroad_field': 'KENROAD_',
    'kenroad_id': 'KENROAD_ID',
    'geom': 'MULTILINESTRING',
}
