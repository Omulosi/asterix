from django.urls import reverse
from rest_framework.test import APIClient, APITestCase
from rest_framework.views import status
from django.contrib.gis.geos import fromstr

from asterix.apps.markers.models import Marker


class MarkerListCreateAPIView(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse("markers-list", kwargs={"version": "v1"})
        self.data = getOneFeature()

    def test_create_marker(self):
        self.assertEquals(Marker.objects.count(), 0)
        data = getOneFeature()
        response = self.client.post(self.url, data=self.data, format="json")
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        self.assertEquals(Marker.objects.count(), 1)
        marker = Marker.objects.first()
        # check if individual fields compare
        self.assertEquals(marker.name, data["properties"]["name"])

    def test_get_marker_list(self):

        # Create Marker/ Feature
        longitude, latitude = [-1.308889970195843, 36.81149482214762]
        location = fromstr(f"POINT({longitude} {latitude})", srid=4326)
        marker = Marker(name="maker uno", location=location)
        marker.save()

        response = self.client.get(self.url)
        response_json = response.json()
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(len(response_json["features"]), 1)


class MarkerDetailsAPIViewTest(APITestCase):
    def setUp(self) -> None:
        # create and save a marker
        # Create Marker/ Feature
        longitude, latitude = [-1.308889970195843, 36.81149482214762]
        location = fromstr(f"POINT({longitude} {latitude})", srid=4326)
        self.marker = Marker(name="maker uno", location=location)
        self.marker.save()

        self.url = reverse("markers-detail", kwargs={"version": "v1", "pk": self.marker.id})

    def test_get_marker_details(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        data = response.json()
        # Test data format/details
        self.assertEquals(data["id"], self.marker.id)

    def test_update_marker(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        data = response.json()
        # update data object
        data["properties"]["name"] = "New Name"
        response = self.client.put(self.url, data=data, format="json")
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.marker.refresh_from_db()
        # test data has updated values
        self.assertEquals(data["properties"]["name"], self.marker.name)

    def test_delete_marker(self):
        self.assertEquals(Marker.objects.count(), 1)
        response = self.client.delete(self.url)
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEquals(Marker.objects.count(), 0)


def getOneFeature():
    return {
        "id": 1,
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [-1.308889970195843, 36.81149482214762]},
        "bbox": [-1.308889970195843, 36.81149482214762, -1.308889970195843, 36.81149482214762],
        "properties": {"name": "siwaka estate"},
    }


def getListOfFeatures():
    {
        "type": "FeatureCollection",
        "features": [
            {
                "id": 2,
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [-1.272592801877131, 36.86084746801358]},
                "bbox": [-1.2725928018771306, 36.86084746801358, -1.2725928018771306, 36.86084746801358],
                "properties": {"name": "easich"},
            },
            {
                "id": 5,
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [2.92109701830223, 37.72705077599824]},
                "bbox": [2.92109701830223, 37.72705077599824, 2.92109701830223, 37.72705077599824],
                "properties": {"name": "isiolo"},
            },
        ],
    }
