/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route, Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Films from './Films';
import People from './People'
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={<Header />} />
    <Route path='/films' element={<Films />}>
      <Route index element={<Navbar />} />
    </Route>
    <Route path='/people' element={<People />}> {/* Add the route for the People component */}
      <Route index element={<Navbar />} />
    </Route>
    <Route path='/planets' element={<Planets />}> {/* Add the route for the People component */}
      <Route index element={<Navbar />} />
    </Route>
    <Route path='/species' element={<Species />}> {/* Add the route for the People component */}
      <Route index element={<Navbar />} />
    </Route>
    <Route path='/starships' element={<Starships />}> {/* Add the route for the People component */}
      <Route index element={<Navbar />} />
    </Route>
    <Route path='/vehicles' element={<Vehicles />}> {/* Add the route for the People component */}
      <Route index element={<Navbar />} />
    </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <nav className='navbar'>
          {/* Links for navigation */}
          <Link to='/' className='navbar-link'>
            Home
          </Link>
          <Link to='/films' className='navbar-link'>
            Films
          </Link>
          <Link to='/people' className='navbar-link'> {/* Add the link for the People page */}
            People
          </Link>
          <Link to='/planets' className='navbar-link'> {/* Add the link for the People page */}
            Planets
          </Link>
          <Link to='/species' className='navbar-link'> {/* Add the link for the People page */}
            Species
          </Link>
          <Link to='/starships' className='navbar-link'> {/* Add the link for the People page */}
            Starships
          </Link>
          <Link to='/vehicles' className='navbar-link'> {/* Add the link for the People page */}
             Vehicles
          </Link>
          {/* Add links for other pages like People, Planets, etc. */}
        </nav>
       <Outlet/> {/* Define routes for different pages */}
        <Route />
      </div>
    </RouterProvider>
  );
}

export default App;
