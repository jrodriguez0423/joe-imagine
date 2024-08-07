import React from 'react';
import '../styles/Footer.css';
import logo from '../logo.png';  // Ensure to update the path to your logo

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src={logo} alt="Imagine Seniorcare Inc." /> {/* Update the path */}
      </div>
      <div className="footer-info">
        <p>255 El Camino Real, Burlingame, CA 94010</p>
        <p>nida@imagineseniorcare.com</p>
        <p>(650) 580-9613</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-social">
        <p className="follow-us-header">Follow Us!</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
