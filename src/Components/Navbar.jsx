import React from 'react';
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Contact Page</h1>
      </div>
      <nav className="navLinks">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar