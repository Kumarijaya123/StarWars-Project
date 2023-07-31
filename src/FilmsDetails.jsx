/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FilmDetails.js
import React from 'react';
import './FilmDetails.css'
const FilmDetails = ({ film }) => {
  return (
    <div className="film-details">
      <h2>{film.title}</h2>
      <p>Episode :  {film.episode_id}</p>
      <p>Release Date : {film.release_date}</p>
      {/* Add more film details here */}
    </div>
  );
};

export default FilmDetails;
