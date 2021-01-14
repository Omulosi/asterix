import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import axios from 'axios';
import LocationMarkers from './LocationMarkers';


const MARKERS_LIST_API = 'http://localhost:8000/api/v1/markers';

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

    return (
        <MapContainer
            className="map"
            center={position}
            zoom={10}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarkers locations={features} />
        </MapContainer>
    )

}

export default MapView;

