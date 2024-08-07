import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/ConPage.css';

const ContactPage = () => (
  <div className="contact-page-container">
    <Form className="contact-page">
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
        <Col xs={12} className="mb-3">
          <Form.Group>
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control type="email" id="email" name="email" placeholder="janedoe@email.com" />
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
);

export default ContactPage;
