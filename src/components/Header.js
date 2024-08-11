import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.png';  // Ensure to update the path to your logo

const Header = () => (
  <header className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Imagine Seniorcare Inc Logo" className="logo-button" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Our Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-login" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
