import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="path/to/logo.png" alt="Imagine Seniorcare Inc." /> {/* Update the path */}
      </div>
      <div className="footer-info">
        <p>255 El Camino Real, Burlingame, CA 94010 | nida@imagineseniorcare.com | (650) 580-9613</p>
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
        <p>Follow Us!</p>
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
