import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.png';  // Ensure to update the path to your logo

const Header = () => (
  <header className="navbar navbar-expand-lg">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="Imagine Seniorcare Inc Logo" className="logo-button" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/services">Our Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link btn btn-login" to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
