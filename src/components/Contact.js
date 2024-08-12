import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactPage from './ContactPage';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <Container fluid className="contact-header text-center">
      <h1 className="display-4">Contact Us</h1>
      <p className="contact-jumbo">Let us care for your loved one</p>
    </Container>

    <Container id="contact-form" className="my-5">
      <Row className='contact-page1'>
        <Col md={12} lg={6} className="contact-form-wrapper">
          <h2 className="form-title">Get in Touch</h2>
          <ContactPage />
        </Col>
        <Col md={12} lg={6} className="contact-map">
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed/v1/place?q=255+El+Camino+Real,+Burlingame,+CA+94010&key=AIzaSyD6wSGBrGf_lNK_EdMz-U131TXRIpaVxjs"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="map-overlay"></div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
