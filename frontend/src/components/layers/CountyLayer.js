import React from "react";
import { GeoJSON } from "react-leaflet";

const CountyLayer = (props) => {
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
  const countyStyles = (feature) => {
    // #ff6600 -> orange
    return {color: '#000', fillColor: "#ffe338"};
  }

  return (
    <GeoJSON data={data} style={countyStyles}/>
  );
};

export default CountyLayer;
