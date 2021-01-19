from django.contrib.gis.db import models


class KenyaRiver(models.Model):
    fnode_field = models.BigIntegerField()
    tnode_field = models.BigIntegerField()
    lpoly_field = models.BigIntegerField()
    rpoly_field = models.BigIntegerField()
    length = models.FloatField()
    klrivers_field = models.BigIntegerField()
    klrivers_i = models.BigIntegerField()
    geom = models.MultiLineStringField(srid=4326)

    class Meta:
        verbose_name_plural = "Kenya rivers"


# Auto-generated `LayerMapping` dictionary for KenyaRiver model
kenyariver_mapping = {
    'fnode_field': 'FNODE_',
    'tnode_field': 'TNODE_',
    'lpoly_field': 'LPOLY_',
    'rpoly_field': 'RPOLY_',
    'length': 'LENGTH',
    'klrivers_field': 'KLRIVERS_',
    'klrivers_i': 'KLRIVERS_I',
    'geom': 'MULTILINESTRING',
}
