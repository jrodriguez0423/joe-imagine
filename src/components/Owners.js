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
          With over 25 years of experience in program management, I bring a wealth of expertise in overseeing large-scale software projects across diverse industries, including high-tech, aerospace, and pharmaceuticals. My career has been marked by a proven ability to manage engineering teams effectively, ensuring the timely delivery of market-ready products while maintaining high standards of quality.
Throughout my career, I have excelled in various roles such as planner, scheduler, and program manager, leveraging my skills to guide projects from inception to completion. My experience includes providing insightful statistics and strategic guidance to senior executives, ensuring alignment with organizational goals.
I have also played a pivotal role in proposal development, crafting compelling strategies to attract potential clients and drive business growth. As the CEO of Imagine Seniorcare Inc., I continue to apply my leadership and project management expertise to innovate and enhance senior care solutions.
 forward.
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
          Passionate and dedicated co - founder of Imagine
Senior Care with almost a decade of experience in providing compassionate and professional in-home care services.
Specializing in creating personalized care plans to meet the unique needs of each client. Proven and trusted in the field of healthcare. Ensuring compliance with healthcare regulations and maintaning exceptional standards of care. Commited to enhancing the quality of life of the clients and supporting families through tailored and I reliable care solutions. forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owners;
