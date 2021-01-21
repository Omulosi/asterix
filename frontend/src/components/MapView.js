import React, { useState, useEffect } from "react";
import { Map, LayersControl, LayerGroup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { OSMTileLayer, RoadLayer, RiverLayer, CountyLayer, LocationMarkers, EditControlComponent } from "./layers";
import generalIconPng from "../assets/general_icon.svg";
import shadowIconPng from "../assets/marker-shadow.png";

// work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: generalIconPng,
  iconUrl: generalIconPng,
  shadowUrl: shadowIconPng,
  iconSize: [50, 50],
});

const MARKERS_LIST_API = "http://127.0.0.1:8000/api/v1/markers/";

const MapView = (props) => {
  const { markers, counties, rivers, roads, pushMessageToSnackbar } = props;

  const position = [-1.308889970195843, 36.86084746801358];
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get(`${MARKERS_LIST_API}`)
      .then((res) => {
        let data = res.data.features ? res.data.features : [];
        setFeatures(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (data) => {
    console.log("GeoJson data => " + data.features);
    if (data) {
      // persist to database
      axios
        .post(MARKERS_LIST_API, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Map className="map" center={position} zoom={7}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <OSMTileLayer />,
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name="Location Markers" checked>
        <LayerGroup>
        <LocationMarkers locations={features} />
        </LayerGroup>
          
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Counties - Kenya">
          <CountyLayer data={counties} />,
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Rivers - Kenya">
          <RiverLayer data={rivers} />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Roads - Kenya">
          <RoadLayer data={roads} />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Edit Control">
          <EditControlComponent onChange={onChange} data={features} />
        </LayersControl.Overlay>
      </LayersControl>
    </Map>
  );
};

export default MapView;
