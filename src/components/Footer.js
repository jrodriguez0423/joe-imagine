import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
import logo from '../logo.png';  // Ensure to update the path to your logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-card">
      <Row className="mb-4">
        <Col md={6} sm={6} xs={12}>
          <div className="footer-text pull-left">
            <div className="d-flex align-items-center">
              <img src={logo} alt="Imagine Seniorcare Inc." className="footer-logo" />
            </div>
            <div className="social mt-4 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
              </a>
            </div>
          </div>
        </Col>
        <Col md={6} sm={6} xs={12} className="contact-us-column ml-auto">
          <h5 className="heading">Contact Us</h5>
          <p>255 El Camino Real, Burlingame, CA 94010</p>
          <p>nida@imagineseniorcare.com</p>
          <p>(650) 580-9613</p>
        </Col>
      </Row>
      <div className="divider mb-4"></div>
      <Row style={{ fontSize: '10px' }}>
        <Col md={6} sm={6} xs={6}>
          <div className="pull-left">
            <p><i className="fa fa-copyright"></i> 2024 Imagine Seniorcare Inc.</p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Footer;
