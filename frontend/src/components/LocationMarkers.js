import React, { Fragment } from 'react'
import {Marker, Popup } from 'react-leaflet';
import {LocationIcon} from './Icons';
import MarkerPopup from './MarkerPopup';

const LocationMarkers = (props) => {
  const { locations } = props;

  const markers = locations.map((location, index) => (
    <Marker key={index} position={location.geometry.coordinates} icon={LocationIcon} >
      <MarkerPopup properties={location.properties} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default LocationMarkers;