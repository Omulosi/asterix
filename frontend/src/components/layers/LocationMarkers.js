import React, { Fragment } from 'react'
import {Marker } from 'react-leaflet';
import {greenIcon} from '../Icons';
import MarkerPopup from '../popup/MarkerPopup';

const LocationMarkers = (props) => {
  const { markers } = props;
  let features=[];
  if (markers.features) {
    features = markers.features;
  }


  const iconMarkers = features.map((location, index) => (
    <Marker key={index} position={location.geometry.coordinates} icon={greenIcon} >
      <MarkerPopup properties={location.properties} />
    </Marker>
  ));

  return <Fragment>{iconMarkers}</Fragment>
};

export default LocationMarkers;
