import React from 'react';
import '../styles/Home.css';
import backgroundImage from '../homepage.png'; // Update this path
import InfoSection from './InfoSection'; // Import the InfoSection component
import ServicesSection from './ServicesSection'; // Import the ServicesSection component
import TestimonialsSection from './TestimonialsSection'; // Import the TestimonialsSection component
import ContactForm from './ContactForm'; // Import the ContactForm component

const Home = () => (
  <div className="home">
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="hero-content-home text-left">
        <h1>IMAGINE SENIORCARE INC</h1>
        <p>Where Your Loved Ones are Cherished, Respected, and Thriving Every Day</p>
        <div className="hero-buttons">
          <button className="btn hero-button btn-lg m-2" style={{ fontWeight: 'bold' }}>Our Services</button>
          <button className="btn hero-button btn-lg m-2" style={{ fontWeight: 'bold' }}>Contact Us</button>
        </div>
      </div>
    </div>
    <div className="main-content">
      <InfoSection /> {/* Add the InfoSection component here */}
      <ServicesSection /> {/* Add the ServicesSection component here */}
      <TestimonialsSection /> {/* Add the TestimonialsSection component here */}
      <ContactForm /> {/* Add the ContactForm component here */}
    </div>
  </div>
);

export default Home;
