import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/ContactForm.css';

const ContactForm = () => (
  <div className="container-fluid contact-form-container">
    <div className="row no-gutters">
      <div className="col-md-6 form-content">
        <h2>Fill Out The Form And We’ll Get In Touch:</h2>
        <p>Where Your Loved Ones are Cherished, Respected, and Thriving Every Day</p>
      </div>
      <div className="col-md-6">
        <Form className="contact-form">
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control type="text" id="firstName" name="firstName" placeholder="Jane" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="lastName">Last name</Form.Label>
                <Form.Control type="text" id="lastName" name="lastName" placeholder="Doe" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control type="email" id="email" name="email" placeholder="janedoe@email.com" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control type="text" id="subject" name="subject" placeholder="Enter subject" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Your message</Form.Label>
            <Form.Control as="textarea" id="message" name="message" rows={5} placeholder="Enter your question or message" />
          </Form.Group>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="primary" type="submit" className="btn btn-submit">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
);

export default ContactForm;
