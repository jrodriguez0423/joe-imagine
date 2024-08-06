// src/components/Owners.js
import React from 'react';
import '../styles/Owners.css'; // Make sure to create this CSS file
import joe from '../joe.png';
import nida from '../nida.png';

const Owners = () => {
  return (
    <div className="owners-section">
      <div className="owner">
        <div className="owner-details">
          <h2>Joe Kitchura - CEO</h2>
          <p>
            Joe, the Founder and CEO of Imagine Senior Care Inc., brings over two decades of experience in the senior care industry. His journey began with a volunteer stint at a local nursing home during his college years, which sparked his passion for elder care. His leadership and dedication to excellence have established Imagine Senior Care as a trusted community name. Joe believes in a hands-on approach, frequently visiting the facility to ensure the highest standards of care. Under his guidance, Imagine Senior Care Inc. has become a place where seniors receive personalized care and families find peace of mind. He is committed to compassion, integrity, and innovation, driving the mission of Imagine Senior Care Inc. forward.
          </p>
        </div>
        <div className="owner-image">
          <img src={joe} alt="Joe Kitchura" />
        </div>
      </div>
      <div className="owner">
        <div className="owner-image">
          <img src={nida} alt="Nida Kitchura" />
        </div>
        <div className="owner-details">
          <h2>Nida Kitchura - CFO</h2>
          <p>
            Nida, the CFO of Imagine Senior Care Inc., brings over two decades of experience in the senior care industry. Her journey began with a volunteer stint at a local nursing home during her college years, which sparked her passion for elder care. Her leadership and dedication to excellence have established Imagine Senior Care as a trusted community name. Nida believes in a hands-on approach, frequently visiting the facility to ensure the highest standards of care. Under her guidance, Imagine Senior Care Inc. has become a place where seniors receive personalized care and families find peace of mind. She is committed to compassion, integrity, and innovation, driving the mission of Imagine Senior Care Inc. forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owners;
