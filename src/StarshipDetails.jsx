/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './StarshipDetails.css'

const StarshipDetails = ({ starship }) => {
  return (
    <div className="starship-details">
      <h2 className="starship-name">{starship.name}</h2>
      <div className="details">
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Cost in credits:</strong> {starship.cost_in_credits}</p>
        <p><strong>Length:</strong> {starship.length}</p>
        <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
        <p><strong>Passengers:</strong> {starship.passengers}</p>
        <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
      </div>
    </div>
  );
};

export default StarshipDetails;
