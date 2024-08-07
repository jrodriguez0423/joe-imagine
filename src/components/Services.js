import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faHandHoldingHeart, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const Services = () => (
  <div>
    <div className="services-hero">
      <div className="hero-content text-left">
        <h1>Our Services</h1>
      </div>
    </div>
    <div className="container services-content">
      <div className="row">
        <div className="col-md-4 service-item">
          <FontAwesomeIcon icon={faHandsHelping} className="service-icon" />
          <h3>In-Home Caregivers/Sitters</h3>
          <p>Imagine Seniorcare Inc. provides compassionate in-home caregivers and sitters to ensure seniors receive personalized care and companionship in the comfort of their own homes. Our caregivers assist with daily activities, medication reminders, and provide emotional support to enhance overall well-being.</p>
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="col-md-4 service-item">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="service-icon" />
          <h3>Complete Assistance in Daily Living/Task</h3>
          <p>We offer comprehensive assistance with daily living tasks to help seniors maintain their independence and quality of life. From meal preparation and personal hygiene to light housekeeping and mobility support, our dedicated team is here to assist with all essential needs.</p>
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="col-md-4 service-item">
          <FontAwesomeIcon icon={faAmbulance} className="service-icon" />
          <h3>Transportation For Medical Appointments</h3>
          <p>Imagine Seniorcare Inc. ensures seniors have reliable transportation to and from medical appointments. Our trained staff provides safe, punctual, and comfortable rides, ensuring clients arrive on time and receive the care they need.</p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
