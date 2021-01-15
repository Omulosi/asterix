import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import LocationMarkers from './LocationMarkers';
import EditControlComponent from './EditControlComponent';
import generalIconPng from '../assets/general_icon.svg';
import shadowIconPng from '../assets/marker-shadow.png';

// work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: generalIconPng,
  iconUrl: generalIconPng,
  shadowUrl: shadowIconPng,
  iconSize: [50, 50]
});


const MARKERS_LIST_API = 'http://localhost:8000/api/v1/markers/';

const MapView = (props) => {

    const position = [-1.308889970195843, 36.86084746801358];
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        axios.get(`${MARKERS_LIST_API}`)
        .then(res => {
            let data = res.data.features? res.data.features: [];
            setFeatures(data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const onChange = (data) => {
        console.log("GeoJson data => " + data.features);
        if (data) {
            axios.post(MARKERS_LIST_API, data)
            .then(res => {
                console.log(res);

            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <Map
            className="map"
            center={position}
            zoom={10}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarkers locations={features} />
            <EditControlComponent onChange={onChange} features={features}/>
        </Map>
    )

}

export default MapView;

