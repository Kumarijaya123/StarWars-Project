import { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetDetails from './PlanetDetails.jsx';
import "./Planets.css"; 

const API_URL = 'https://swapi.dev/api';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showPlanetsDetails, setShowPlanetsDetails] = useState(false);

  useEffect(() => {
    fetchPlanets();
  }, []);

  async function fetchPlanets() {
    try {
      const response = await axios.get(`${API_URL}/planets/`);
      setPlanets(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setShowPlanetsDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowPlanetsDetails(false);
  };

  return (
    <div>
      {showPlanetsDetails ? (
        <div>
          <button className='back-button'onClick={handleBackButtonClick}>Back to Planets</button>
          {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
        </div>
      ) : (
        <div>
          <h1 className='planets'>Planets</h1>
          <div className="planet-container">
            {planets.map((planet) => (
              <div
                key={planet.name}
                className="planet-item"
                onClick={() => handlePlanetClick(planet)}
              >
                 <img
                  src={`https://picsum.photos/200?random=${planet.name}`}
                  alt={planet.name}
                />
                <h3 className='planetName'>{planet.name}</h3>
                <p className='diameter'>Diameter: {planet.diameter}</p>
                <p className='climate'>Climate: {planet.climate}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Planets;
