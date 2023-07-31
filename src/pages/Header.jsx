/* eslint-disable no-unused-vars */
import { useState } from 'react'
import starwars from "../assets/starwars.png"
import '../App.css'
import Navbar from '../Navbar'


function Header() {
    const [searchText, setSearchText] = useState('')
    const handleChange = (e) => {
      setSearchText(e.target.value)
    }

  return (
    <div className='container'>
     <img src={starwars} className='starwars' alt="Star Wars"/>
     <div className='search-container'>
       
     <input type='text' placeholder='Search Here'  value={searchText}
        onChange={handleChange}
        style={{ color: searchText ? 'white' : 'white'}}/>
         <i className='bi bi-search' style={{ color: 'white', position: 'absolute', right: '75px', top: '5.7%' }}></i>
        </div>
     <Navbar/>
    </div>
  )
}

export default Header
