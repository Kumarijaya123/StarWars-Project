/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './PersonDetails.css'

const PersonDetails = ({ person }) => {
  return (
    <div className="person-details">
      <h2>{person.name}</h2>
      <p>Birth Year: {person.birth_year}</p>
      <p>Height: {person.height} cm</p>
      <p>Mass: {person.mass} kg</p>
      <p>Gender: {person.gender}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Hair Color: {person.hair_color}</p>
    </div>
  );
};

export default PersonDetails;
