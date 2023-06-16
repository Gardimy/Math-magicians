import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navba.css';

const Navbar = () => (
  <div className="NavBarContainer">
    <h1>Math Magicians </h1>
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Calculator">Calculator</NavLink>
      <NavLink to="/Quote">Quote</NavLink>
    </nav>
  </div>
);

export default Navbar;
