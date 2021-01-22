"""Markers admin."""

from django.contrib.gis import admin

from asterix.apps.markers.models import Marker


@admin.register(Marker)
class MarkerAdmin(admin.OSMGeoAdmin):
    """Marker admin."""
