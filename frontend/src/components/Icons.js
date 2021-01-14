import L from 'leaflet';
import generalIconPng from '../assets/general_icon.svg';

export const LocationIcon = L.icon({
  iconUrl: generalIconPng,
  iconRetinaUrl: generalIconPng,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'local-general-icon'
});