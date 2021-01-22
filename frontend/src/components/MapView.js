import React, { useState, useEffect } from "react";
import { Map, LayersControl, LayerGroup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { OSMTileLayer, RoadLayer, RiverLayer, CountyLayer, LocationMarkers, EditControlComponent } from "./layers";
import generalIconPng from "../assets/general_icon.svg";
import greenIcon from "../assets/greenIcon.png";
import shadowIconPng from "../assets/marker-shadow.png";

// work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MARKERS_LIST_API = "http://127.0.0.1:8000/api/v1/markers";

const MapView = (props) => {
  const { markers, counties, rivers, roads, pushMessageToSnackbar } = props;

  const position = [-1.308889970195843, 36.86084746801358];
  let initialData = JSON.parse(localStorage.getItem("features"));
  if(!initialData) { 
    initialData = markers;
  }
  const [layerData, setLayerData] = useState(initialData);

  const onChange = (data) => {
    console.log("GeoJson data => " + data.features);
    if (data.features) {
      // persist to database
      localStorage.setItem("features", JSON.stringify(data));
      console.log("================ Data saved to the dataase ===============");
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
        <LocationMarkers markers={markers} />
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
      </LayersControl>
          <EditControlComponent onChange={onChange} data={layerData} />
    </Map>
  );
};

export default MapView;
