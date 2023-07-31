import { useState, useEffect } from 'react';
import axios from 'axios';
import SpeciesDetails from './SpeciesDetails.jsx';
import "./Species.css"; 

const API_URL = 'https://swapi.dev/api';

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [showSpeciesDetails, setShowSpeciesDetails] = useState(false);

  useEffect(() => {
    fetchSpecies();
  }, []);

  async function fetchSpecies() {
    try {
      const response = await axios.get(`${API_URL}/species/`);
      setSpecies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSpeciesClick = (species) => {
    setSelectedSpecies(species);
    setShowSpeciesDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowSpeciesDetails(false);
  };

  return (
    <div>
      {showSpeciesDetails ? (
        <div>
          <button className='back-button'onClick={handleBackButtonClick}>Back to Species</button>
          {selectedSpecies && <SpeciesDetails species={selectedSpecies} />}
        </div>
      ) : (
        <div>
          <h1 className='species'>Species</h1>
          <div className="species-container">
            {species.map((species) => (
              <div
                key={species.name}
                className="species-item"
                onClick={() => handleSpeciesClick(species)}
              >
                {/* Use the species name as the key for the image source */}
                <img
                  src={`https://picsum.photos/200?random=${species.name}`}
                  alt={species.name}
                />
                <h3 className='speciesName'>{species.name}</h3>
                <p className='classification'>Classification: {species.classification}</p>
                <p className='designation'>Designation: {species.designation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Species;
