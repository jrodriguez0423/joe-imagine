import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import '../styles/About.css';
import AboutSection from './AboutSection';
import OwnersBar from './OwnersBar';
import Owners from './Owners';
// Remove the unused backgroundImage import
// import backgroundImage from '../images/about.jpg'; // Remove this line if not used

const About = () => (
  <div className="contact-container">
    <Container fluid className="contact-header text-center">
      <h1 className="display-4">About Us</h1>
      <p className="contact-jumbo">Let us care for your loved one</p>
    </Container>
    <div className="main-content">
      <AboutSection />
      <OwnersBar />
      <Owners />
    </div>
  </div>
);

export default About;
