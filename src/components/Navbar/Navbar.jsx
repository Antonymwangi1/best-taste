import React, { useState } from 'react';
import "./Navbar.css"
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className='navbar fixed-top'>
      <div className="hamburger" onClick={handleClick}>
        {active ? <FaXmark className='red-icon' size={25} /> : <FaBars size={25} className='red-icon' />}
      </div>
      <div className="container-fluid">
        <h1 className="logo"><a href="/">Best<span style={{color: 'var(--secondary-color)'}}>Taste</span></a></h1>
        <div className={active ? "middle-link nav-active" : "middle-link"}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Reservation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className='no'>
            <li><button className='btn-red'>Register</button></li>
            <li><button className='btn-hover-light'>Log In</button></li>
          </div>
        </div>
        <div className="right-links">
          <ul>
            <li><button className='btn-red'>Register</button></li>
            <li><button className='btn-hover-light'>Log In</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar