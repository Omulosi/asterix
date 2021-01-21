import React, { Fragment } from 'react'
import {Marker } from 'react-leaflet';
import {greenIcon} from '../Icons';
import MarkerPopup from '../MarkerPopup';

const LocationMarkers = (props) => {
  const { locations } = props;

  const markers = locations.map((location, index) => (
    <Marker key={index} position={location.geometry.coordinates} icon={greenIcon} >
      <MarkerPopup properties={location.properties} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default LocationMarkers;