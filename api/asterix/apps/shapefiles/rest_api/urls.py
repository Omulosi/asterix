from django.urls import path
from .views import CountyList, KenyaRoadList, KenyaRiverList

urlpatterns = [
    path("counties", CountyList.as_view(), name="counties"),
    path("kenya_rivers", KenyaRiverList.as_view(), name="rivers"),
    path("kenya_roads", KenyaRoadList.as_view(), name="roads"),
]
