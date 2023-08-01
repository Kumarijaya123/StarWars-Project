import { useState, useEffect } from 'react';
import axios from 'axios';
import FilmDetails from './FilmsDetails.jsx';
import "./Films.css";

const API_URL = 'https://swapi.dev/api';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [showFilmDetails, setShowFilmDetails] = useState(false);

  useEffect(() => {
    fetchFilms();
  }, []);

  async function fetchFilms() {
    try {
      const response = await axios.get(`${API_URL}/films/`);
      setFilms(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setShowFilmDetails(true);
  };

  const handleBackButtonClick = () => {
    setSelectedFilm(null);
    setShowFilmDetails(false);
  };

  return (
    <div>
      {!showFilmDetails && (
        <div>
          <h1 className='films'>Films</h1>
          <div className="film-container">
            {films.map((film) => (
              <div
                key={film.episode_id}
                className="film-item"
                onClick={() => handleFilmClick(film)}
              >
                <img
                  src={`https://picsum.photos/200?random=${film.episode_id}`}
                  alt={film.title}
                />
                <h3 className='filmTitle'>{film.title}</h3>
                <p className='releaseDate'>Release Date: {film.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showFilmDetails && (
        <div>
          <button className='back-button' onClick={handleBackButtonClick}>
            Back to Films
          </button>
          {selectedFilm && <FilmDetails film={selectedFilm} />}
        </div>
      )}
    </div>
  );
};

export default Films;
