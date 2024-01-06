import React from 'react';
import './Navbar.css';
import icon from '../icon/Profile.png'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      
      <div className="brand">FreeCPE</div>
      <div className="buttons">
        <a href="/Mejor" className="nav-link-l">Mejor Elective</a>
        <a href="/GE" className="nav-link-l">General Education</a>
        <a href="/Free" className="nav-link-l">Free Elective</a>
        <a href="/reviews" className="nav-link-r">Reviews</a>
        <a href="/profile" className="nav-link-r">Profile</a>
        {/* <a href="/profile" className="nav-link-r">
          <img src={icon} alt="Profile Icon" /> 
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
