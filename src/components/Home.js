import React from 'react';
import '../styles/Home.css';
import backgroundImage from '../homepage.png'; // Update this path
import InfoSection from './InfoSection'; // Import the InfoSection component
import ServicesSection from './ServicesSection'; // Import the ServicesSection component
import TestimonialsSection from './TestimonialsSection'; // Import the TestimonialsSection component
import ContactForm from './ContactForm'; // Import the ContactForm component
import Footer from './Footer'; // Import the Footer component

const Home = () => (
  <div className="home">
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content text-left">
        <h1>IMAGINE SENIORCARE INC</h1>
        <p>Let us care for your loved one</p>
        <div className="hero-buttons">
          <button className="btn hero-button btn-lg m-2">Our Services</button>
          <button className="btn hero-button btn-lg m-2">Contact Us</button>
        </div>
      </div>
    </div>
    <div className="main-content">
      <InfoSection /> {/* Add the InfoSection component here */}
      <ServicesSection /> {/* Add the ServicesSection component here */}
      <TestimonialsSection /> {/* Add the TestimonialsSection component here */}
      <ContactForm /> {/* Add the ContactForm component here */}
    </div>
    <Footer /> {/* Add the Footer component here */}
  </div>
);

export default Home;
