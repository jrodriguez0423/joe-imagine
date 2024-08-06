// src/components/Contact.js
import React from 'react';
import ContactPage from './ContactPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-form-wrapper">
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
);

export default Contact;
