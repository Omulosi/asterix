from django.contrib.gis.db import models
from jsonfield import JSONField

from asterix.apps.account.models import User
from asterix.apps.common.models import CoreModel


class Marker(models.Model):
    location = models.PointField(srid=4326)
    properties = JSONField(null=True, blank=True)

    # created by
    # time created

    def __str__(self):
        return f"Marker: {self.location}"

    class Meta:
        verbose_name_plural = "markers"
