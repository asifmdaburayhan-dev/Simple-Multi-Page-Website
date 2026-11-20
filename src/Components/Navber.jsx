import React from 'react'
import '../Styles/Navber.css';
import { Link } from 'react-router-dom'


const Navber = () => {
  return (

    
    <nav>
        <h4>My Website</h4>
        
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/NotFound">NotFound</Link>
        </div>
    </nav>
    
  )
}

export default Navber
