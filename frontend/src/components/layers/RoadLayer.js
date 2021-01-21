import React, { useState } from "react";
import { GeoJSON } from "react-leaflet";

const RoadLayer = (props) => {
  const {
    data
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
  const roadStyles = (feature) => {
    // #7c4700 -> brown
    return {color: '#7c4700'};
  }


  return (
    <GeoJSON data={data} style={roadStyles}/>
  );
};

export default RoadLayer;
