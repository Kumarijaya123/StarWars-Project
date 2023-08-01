/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './FilmNavbarItems.css'
import caretright from '../assets/caretRight.png'
import Films from '../Films'
import People from '../People'
import Planets from '../Planets'
import Species from '../Species'
import Starships from '../Starships'
import Vehicles from '../Vehicles'

/*
function FilmNavbarItems() {
    const [open, setOpen] = useState(true)
  return (
    <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-title'>
            <span className='film'>
            <i className="bi bi-folder-fill"></i>
                Films
            </span>
            <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
        </div>
     <div className='side-bar-content'>
        Movie Name
     </div>
    </div>
  )
}
*/
function FilmNavbarItems({showSidebar}) {
  const clearParentHTML = () => {
    const parentDiv = document.querySelector('.parent');
    if (parentDiv) {
      parentDiv.innerHTML = '';
    }
  };
  const [isFilmsOpen, setFilmsOpen] = useState(false);
  const [isPeopleOpen, setPeopleOpen] = useState(false);
  const [isPlanetsOpen, setPlanetsOpen] = useState(false);
  const [isSpeciesOpen, setSpeciesOpen] = useState(false); 
  const [isStarshipsOpen, setStarshipsOpen] = useState(false);
  const [isVehiclesOpen, setVehiclesOpen] = useState(false);

  const toggleFilmsDropdown = () => {
    setFilmsOpen(!isFilmsOpen);
    setPeopleOpen(false); // Close the People dropdown when opening Films dropdown
    setPlanetsOpen(false)
    setSpeciesOpen(false);
    setStarshipsOpen(false);
    setVehiclesOpen(false);
   
  };

  const togglePeopleDropdown = () => {
    setPeopleOpen(!isPeopleOpen);
    setFilmsOpen(false); 
    setPlanetsOpen(false)
    setSpeciesOpen(false);
    setStarshipsOpen(false);
    setVehiclesOpen(false);
  };
  const togglePlanetsDropdown = () => {
    setPlanetsOpen(!isPlanetsOpen);
    setFilmsOpen(false); 
    setPeopleOpen(false)
    setSpeciesOpen(false);
    setStarshipsOpen(false);
    setVehiclesOpen(false);
  };

  const toggleSpeciesDropdown = () => {
    setSpeciesOpen(!isSpeciesOpen);
    setFilmsOpen(false);
    setPeopleOpen(false);
    setPlanetsOpen(false); 
    setStarshipsOpen(false);
    setVehiclesOpen(false);
  };

  const toggleStarshipsDropdown = () => {
    setStarshipsOpen(!isStarshipsOpen);
    setFilmsOpen(false);
    setPeopleOpen(false);
    setPlanetsOpen(false);
    setSpeciesOpen(false); 
    setVehiclesOpen(false);
  };

  const toggleVehiclesDropdown = () => {
    setVehiclesOpen(!isVehiclesOpen);
    setFilmsOpen(false);
    setPeopleOpen(false);
    setPlanetsOpen(false);
    setSpeciesOpen(false);
    setStarshipsOpen(false); 
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleFilmsDropdown}>
        <i className="bi bi-camera-reels" style={{ color: 'white' }}></i>
        <span className="films-text">Films</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isFilmsOpen &&(
        <div className="dropdown-content-right">
          <Films />
        </div>
        )}
      <button className="dropdown-btn" onClick={togglePeopleDropdown}>
        <i className="bi bi-people-fill" style={{ color: 'white' }}></i>
        <span className="peoples-text">People</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isPeopleOpen && <People />}
      <button className="dropdown-btn" onClick={togglePlanetsDropdown}>
        <i className="bi bi-globe" style={{ color: 'white' }}></i>
        <span className="planets-text">Planets</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isPlanetsOpen && <Planets/>}
      <button className="dropdown-btn" onClick={toggleSpeciesDropdown}>
        <i className="bi bi-journal-richtext" style={{ color: 'white' }}></i>
        <span className="species-text">Species</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isSpeciesOpen && <Species />}
      <button className="dropdown-btn" onClick={toggleStarshipsDropdown}>
        <i className="bi bi-rocket-takeoff" style={{ color: 'white' }}></i>
        <span className="starships-text">Starships</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isStarshipsOpen && <Starships />}
      <button className="dropdown-btn" onClick={toggleVehiclesDropdown}>
        <i className="bi bi-truck" style={{ color: 'white' }}></i>
        <span className="vehicles-text">Vehicles</span>
        <img src={caretright} alt="Caret Right" className="caret-icon" />
      </button>
      {isVehiclesOpen && <Vehicles />}
    </div>
  );
}


export default FilmNavbarItems

/* {isOpen && (
      <ul className="dropdown-menu">
        <li>
          <img src={filmreel} alt="Film Reel" className="filmreel-icon" />
          Movie Name
        </li>
      
      </ul>
    )}

    */