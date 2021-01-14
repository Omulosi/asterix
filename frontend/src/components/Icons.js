import L, { Icon } from 'leaflet';
import leafletMarkerIconPng from 'leaflet/dist/images/marker-icon.png';
import generalIconPng from '../assets/general_icon.svg';

export const GeneralIcon = new Icon({
  iconUrl: leafletMarkerIconPng,
  iconSize: [35, 35]
})

export const LocationIcon = L.icon({
  iconUrl: generalIconPng,
  iconRetinaUrl: generalIconPng,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'local-general-icon'
});