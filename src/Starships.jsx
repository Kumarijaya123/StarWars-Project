import { useState, useEffect } from 'react';
import axios from 'axios';
import StarshipDetails from './StarshipDetails.jsx';
import "./Starships.css"; 

const API_URL = 'https://swapi.dev/api';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [showStarshipDetails, setShowStarshipDetails] = useState(false);

  useEffect(() => {
    fetchStarships();
  }, []);

  async function fetchStarships() {
    try {
      const response = await axios.get(`${API_URL}/starships/`);
      setStarships(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleStarshipClick = (starship) => {
    setSelectedStarship(starship);
    setShowStarshipDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowStarshipDetails(false);
  };

  return (
    <div>
      {showStarshipDetails ? (
        <div>
          <button className='back-button'onClick={handleBackButtonClick}>Back to Starships</button>
          {selectedStarship && <StarshipDetails starship={selectedStarship} />}
        </div>
      ) : (
        <div>
          <h1 className='starships'>Starships</h1>
          <div className="starship-container">
            {starships.map((starship) => (
              <div
                key={starship.name}
                className="starship-item"
                onClick={() => handleStarshipClick(starship)}
              >
                <img
                  src={`https://picsum.photos/200?random=${starship.name}`}
                  alt={starship.name}
                />
                <h3 className='starshipName'>{starship.name}</h3>
                <p className='model'>Model: {starship.model}</p>
                <p className='manufacturer'>Manufacturer: {starship.manufacturer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Starships;
