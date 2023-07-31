/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './SpeciesDetails.css'


const SpeciesDetails = ({ species }) => {
  return (
    <div className="species-details">
      <h2 className="species-name">{species.name}</h2>
      <p><strong>Classification:</strong> {species.classification}</p>
      <p><strong>Designation:</strong> {species.designation}</p>
      <p><strong>Average Height:</strong> {species.average_height}</p>
      <p><strong>Skin Colors:</strong> {species.skin_colors}</p>
      <p><strong>Hair Colors:</strong> {species.hair_colors}</p>
      <p><strong>Eye Colors:</strong> {species.eye_colors}</p>
      <p><strong>Average Lifespan:</strong> {species.average_lifespan}</p>
      <p><strong>Language:</strong> {species.language}</p>
    </div>
  );
};

export default SpeciesDetails;
