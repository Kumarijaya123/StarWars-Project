import { useState } from 'react';
import './Navbar.css';
import dashboard from './assets/dashboard.png';
import FilmNavbar from './components/FilmNavbar'; // Assuming this is the sidebar component

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="main">
      <FilmNavbar showSidebar={showSidebar} />
      <div className="main1">
        <div className='container'>
          <button className='button' onClick={toggleSidebar}>
            <img src={dashboard} alt="Dashboard" className="dashboard-image" /> 
            <div className="button-content">
              <br/>
              <span className="welcome">Welcome to Star Wars</span>
              <br/>
              <span className="dashboard">DashBoard</span>
              <br/>
              <br/>
              <span className="star">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began </span>
              <br/>
              <span className='with'>with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</span>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;



/*import { useState } from 'react';
import './Navbar.css';
import dashboard from './assets/dashboard.png';
import FilmNavbar from './components/FilmNavbar';// Assuming this is the sidebar component

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="main">
      <FilmNavbar />
      <div className="main1">
        <div className='container'>
        
          <button className='button' onClick={toggleSidebar}>
            <img src={dashboard} alt="Dashboard" className="dashboard-image" /> 
            <div className="button-content">
              <br/>
              <span className="welcome">Welcome to Star Wars</span>
              <br/>
              <span className="dashboard">DashBoard</span>
              <br/>
              <br/>
              <span className="star">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began </span>
              <br/>
              <span className='with'>with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</span>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar
*/