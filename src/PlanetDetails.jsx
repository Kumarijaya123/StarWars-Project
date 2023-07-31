/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './PlanetDetails.css'
const PlanetDetails = ({ planet }) => {
  return (
    <div className="planet-details">
      <h2>{planet.name}</h2>
      <p>Diameter: {planet.diameter}</p>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      {/* Add other properties you want to display */}
    </div>
  );
};

export default PlanetDetails;
