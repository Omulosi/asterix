import React, { useState, useEffect } from "react";
import { Map, LayersControl, LayerGroup } from "react-leaflet";
import L from "leaflet";
import { axiosWithAuth } from "../utils/axiosAuth";
import { OSMTileLayer, RoadLayer, RiverLayer, CountyLayer, LocationMarkers, EditControlComponent } from "./layers";

import { MARKERS_LIST_ENDPOINT } from "../config";

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

var _ = require('lodash');

const MapView = (props) => {
  let { markers, counties, rivers, roads, pushMessageToSnackbar } = props;



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
      console.log("================ Data saved to the dataase ===============");
      axiosWithAuth()
      .post(`${MARKERS_LIST_ENDPOINT}/`)
      .then( ({ data }) => {
        localStorage.setItem("features", JSON.stringify(data));
        pushMessageToSnackbar({
          'text': 'Marker has been successfully saved'
        })
      }).catch((err) => {
        console.log(err);
        pushMessageToSnackbar({
          'text': 'Marker has been saved!'
        })
        localStorage.setItem("features", JSON.stringify(data));
      })
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
        {
          markers?  <LocationMarkers markers={markers} />: null
        }
         
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
      <EditControlComponent onChange={onChange} data={layerData} setLayerData={setLayerData}/>
      
    </Map>
  );
};

export default MapView;
