"""Counties admin."""

from django.contrib.gis import admin
from asterix.apps.shapefiles.models import County, KenyaRiver, KenyaRoad
from leaflet.admin import LeafletGeoAdmin


@admin.register(County)
class CountyAdmin(LeafletGeoAdmin):
    list_display = ('counties', 'cty_code')
    search_fields = ('counties', )
    filter_fields = ('counties', 'cty_code')

@admin.register(KenyaRoad)
class KenyaRoadAdmin(LeafletGeoAdmin):
    list_display = ('kenroad_field',)
    search_fields = ('kenroad_field',)
    filter_fields = ('length', 'kenroad_field')

@admin.register(KenyaRiver)
class KenyaRiverAdmin(LeafletGeoAdmin):
    list_display = ('klrivers_field',)
    search_fields = ('klrivers_field',)
    filter_fields = ('length', 'klrivers_field')

