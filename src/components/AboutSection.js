import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutSection.css';
import image1 from '../image1.png'; // Update the path
import image2 from '../image2.png'; // Update the path

const AboutSection = () => (
  <div className="info-section py-5">
    <Container>
      <Row className="info-row mb-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Our Story</Card.Title>
              <Card.Text>
              Imagine Senior Care was established in 2022 with a simple yet profound vision: to provide compassionate and specialized care for seniors. Our founder, driven by a deep understanding of the challenges faced by seniors and their families, set out to create a place where quality care and a warm, community-oriented environment go hand in hand. We have grown into a trusted senior care home known for our dedicated staff and exceptional services.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Img variant="top" src={image1} alt="Our Team" />
          </Card>
        </Col>
      </Row>
      <Row className="info-row">
        <Col md={6}>
          <Card className="h-100">
            <Card.Img variant="top" src={image2} alt="Our Services" />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Core Values</Card.Title>
              <Card.Text>
              Compassion: We treat every resident with kindness, empathy, and respect. Excellence: We strive for the highest standards in care and services. Integrity: We act with honesty and transparency in all our interactions. Community: We foster a sense of belonging and family among our residents, staff, and the wider community.
              Innovation: We embrace new ideas and approaches to improve the quality of life for our residents.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutSection;
