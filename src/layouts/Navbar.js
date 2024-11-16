import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../style/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className='d-flex flex-row nav-container'>
        <div>
          <img src={logo} alt="logo" className='px-5' />
        </div>
        <div className="d-flex justify-content-end nav-content">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
