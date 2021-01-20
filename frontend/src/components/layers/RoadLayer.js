import React, { useState, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import axios from "axios";


const RIVERS_LIST_API = "http://192.168.60.59:8000/api/v1/kenya_rivers/";

const RoadLayer = (props) => {
  const [features, setFeatures] = useState([]);


  useEffect(() => {
    axios
      .get(`${RIVERS_LIST_API}`)
      .then((res) => {
        let data = res.data? res.data : [];
        setFeatures(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GeoJSON data={features}/>
  );
};

export default RoadLayer;
