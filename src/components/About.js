import React from 'react';
import '../styles/About.css';
import backgroundImage from '../about.png'; // Update this path
import AboutSection from './AboutSection'; // Import the InfoSection component
import OwnersBar from './OwnersBar';
import Owners from './Owners';

const About = () => (
  <div className="home">
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
    <div className="main-content">
      <AboutSection /> {/* Add the InfoSection component here */}
      <OwnersBar />
      <Owners />
    </div>
  </div>
);

export default About;
