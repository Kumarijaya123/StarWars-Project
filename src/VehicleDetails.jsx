/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './VehicleDetails.css'
const VehicleDetails = ({ vehicle }) => {
  return (
    <div className='vehicle-details'>
      <h2>{vehicle.name}</h2>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost in credits: {vehicle.cost_in_credits}</p>
      <p>Length: {vehicle.length}</p>
      <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Crew: {vehicle.crew}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
      <p>Consumables: {vehicle.consumables}</p>
      <p>Vehicle Class: {vehicle.vehicle_class}</p>
    </div>
  );
};

export default VehicleDetails;
