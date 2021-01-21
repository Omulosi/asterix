import React, { useState, useEffect } from "react";
import { GeoJSON } from "react-leaflet";


const RoadLayer = (props) => {
  const {
    data,
  } = props;

  /**
   * Defines path options for styling GeoJSON lines.
   * Called internally when data is added.
   * 
   * options:
   *  - color
   *  - fillColor (== color)
   * 
   * @param feature feature to display
   */
  const riverStyles = (feature) => {
    // #3cdfff -> light blue
    return {color: '#007dff'};
  }


  return (
    <GeoJSON data={data} style={riverStyles}/>
  );
};

export default RoadLayer;
