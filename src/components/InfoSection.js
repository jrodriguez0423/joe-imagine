import React from 'react';
import '../styles/InfoSection.css';
import image1 from '../image1.png'; // Update the path
import image2 from '../image2.png'; // Update the path

const InfoSection = () => (
    <div className="info-section">
      <div className="info-container">
        <div className="info-card">
          <h2>Welcome to Imagine Seniorcare Inc!</h2>
          <p>
            At Imagine Senior Care, we are dedicated to providing compassionate and personalized care for your loved ones. Our team of fully trained professionals is committed to ensuring that every resident receives the highest level of support, assistance, and resources. We understand the unique needs of seniors and their families, and we strive to create a warm and welcoming environment where everyone feels at home. Our services are designed to enhance the quality of life for our residents, offering peace of mind to their families.
          </p>
        </div>
        <div className="info-card">
          <img src={image1} alt="Our Team" />
        </div>
      </div>
      <div className="info-container">
        <div className="info-card">
          <img src={image2} alt="Our Services" />
        </div>
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            At Imagine Senior Care, our mission is to deliver compassionate healthcare to loved ones with specialized needs. We are devoted to providing a full range of support and assistance to seniors and families throughout the Bay Area. Our goal is to offer professional and individualized care in Assisted Living, Board & Care, and Memory Care. We are committed to fostering a community where seniors can thrive, ensuring their safety, comfort, and well-being. We strive to enhance the quality of life for our residents through personalized care plans.
          </p>
        </div>
      </div>
    </div>
  );
  
export default InfoSection;
