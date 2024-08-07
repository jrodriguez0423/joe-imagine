import React from 'react';
import ContactPage from './ContactPage';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <div className="contact-form-wrapper">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Let us care for your loved one</p>
        </div>
        <ContactPage />
      </div>
      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed/v1/place?q=255+El+Camino+Real,+Burlingame,+CA+94010&key=AIzaSyD6wSGBrGf_lNK_EdMz-U131TXRIpaVxjs"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="follow-us">
      <h2>Follow Us</h2>
      <div className="socials-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="socials-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="socials-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="socials-icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
