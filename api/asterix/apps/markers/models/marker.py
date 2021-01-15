from django.contrib.gis.db import models

from asterix.apps.account.models import User
from asterix.apps.common.models import CoreModel


class Marker(models.Model):
    name = models.CharField(max_length=100, unique=True)
    location = models.PointField(srid=4326)
    # created by
    # time created

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "markers"
