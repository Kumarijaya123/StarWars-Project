import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails.jsx';
import "./People.css";

const API_URL = 'https://swapi.dev/api';

const People = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showPersonDetails, setShowPersonDetails] = useState(false);

  useEffect(() => {
    fetchPeople();
  }, []);

  async function fetchPeople() {
    try {
      const response = await axios.get(`${API_URL}/people/`);
      setPeople(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setShowPersonDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowPersonDetails(false);
  };

  return (
    <div>
      
      {showPersonDetails ? (
        <div>
          <button className='back-button'onClick={handleBackButtonClick}>Back to People</button>
          {selectedPerson && <PersonDetails person={selectedPerson} />}
        </div>
      ) : (
        <div>
          <h1 className='people'>People</h1>
          <div className="people-container">
            {people.map((person) => (
              <div
                key={person.url}
                className="person-item"
                onClick={() => handlePersonClick(person)}
              >
                <img
                  src={`https://picsum.photos/200?random=${person.url}`}
                  alt={person.name}
                />
                <h3 className='personName'>{person.name}</h3>
                <p className='personGender'>Gender: {person.gender}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
