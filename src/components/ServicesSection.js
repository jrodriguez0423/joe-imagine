import React from 'react';
import '../styles/ServicesSection.css';
import serviceImage from '../image3.png'; // Update the path

const ServicesSection = () => (
    <div className="services-section">
      <div className="services-container">
        <div className="services-image">
          <img src={serviceImage} alt="Caregiver with patient" />
        </div>
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service-item">
            <div className="service-icon">👩‍⚕️</div> {/* Replace with actual icon if available */}
            <p>Fully Trained In-Home Caregivers/Sitters</p>
          </div>
          <div className="service-item">
            <div className="service-icon">💪</div> {/* Replace with actual icon if available */}
            <p>Complete Assistance in Daily Living/Task</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🚗</div> {/* Replace with actual icon if available */}
            <p>Provide Safe and Reliable Transportation For Medical Appointments</p>
          </div>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
    </div>
  );

export default ServicesSection;
