import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse, faHandHoldingHeart, faCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/ServicesSection.css';

const ServicesSection = () => (
  <section className="bsb-service-6 py-5 services-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <h2 className="services-header">Our Services</h2>
          <hr className="w-50 mx-auto mb-5 border-dark-subtle" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row gy-4 gx-5">
        <div className="col-12 col-md-4">
          <div className="card bg-transparent border-primary rounded-0">
            <div className="card-body">
              <FontAwesomeIcon icon={faUserNurse} className="service-icon text-primary mb-4" />
              <h3 className="h2 mb-4">Fully Trained In-Home Caregivers/Sitters</h3>
              <p className="mb-4 text-secondary">Our fully trained in-home caregivers and sitters provide comprehensive assistance for daily living tasks, ensuring your loved ones receive the best care possible.</p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card bg-transparent border-primary rounded-0">
            <div className="card-body">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="service-icon text-primary mb-4" />
              <h3 className="h2 mb-4">Complete Assistance in Daily Living/Task</h3>
              <p className="mb-4 text-secondary">We provide complete assistance in daily living tasks, helping you maintain your independence and quality of life.</p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card bg-transparent border-primary rounded-0">
            <div className="card-body">
              <FontAwesomeIcon icon={faCar} className="service-icon text-primary mb-4" />
              <h3 className="h2 mb-4">Safe and Reliable Transportation</h3>
              <p className="mb-4 text-secondary">Our services include providing safe and reliable transportation for medical appointments, ensuring you get to your destinations comfortably and on time.</p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
