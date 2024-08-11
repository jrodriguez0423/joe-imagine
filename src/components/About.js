import React from 'react';
import '../styles/About.css';
import backgroundImage from '../images/about.jpg'; // Update this path
import AboutSection from './AboutSection'; // Import the InfoSection component
import OwnersBar from './OwnersBar';
import Owners from './Owners';

const About = () => (
  <div className="home">
    <div className="hero2" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div> {/* Add the overlay here */}
      <div className="hero-content-about-services"> {/* Add your hero content here */}
        <h1 className='about-serv-head'>About Us</h1>
        <p>Let us care for your loved one</p>
      </div>
    </div>
    <div className="main-content">
      <AboutSection /> {/* Add the InfoSection component here */}
      <OwnersBar />
      <Owners />
    </div>
  </div>
);

export default About;
