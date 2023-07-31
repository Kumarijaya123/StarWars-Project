import { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleDetails from './VehicleDetails.jsx';
import "./Vehicles.css"; 

const API_URL = 'https://swapi.dev/api';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);

  useEffect(() => {
    fetchVehicles();
  }, []);

  async function fetchVehicles() {
    try {
      const response = await axios.get(`${API_URL}/vehicles/`);
      setVehicles(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowVehicleDetails(true);
  };

  const handleBackButtonClick = () => {
    setShowVehicleDetails(false);
  };

  return (
    <div>
      {showVehicleDetails ? (
        <div>
          <button className='back-button'onClick={handleBackButtonClick}>Back to Vehicles</button>
          {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
        </div>
      ) : (
        <div>
          <h1 className='vehicles'>Vehicles</h1>
          <div className="vehicle-container">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="vehicle-item"
                onClick={() => handleVehicleClick(vehicle)}
              >
                <img
                  src={`https://picsum.photos/200?random=${vehicle.name}`}
                  alt={vehicle.name}
                />
                <h3 className='vehicleName'>{vehicle.name}</h3>
                <p className='model'>Model: {vehicle.model}</p>
                <p className='manufacturer'>Manufacturer: {vehicle.manufacturer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
