import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/InfoSection.css';
import image1 from '../image1.png'; // Update the path
import image2 from '../image2.png'; // Update the path

const InfoSection = () => (
  <div className="info-section py-5">
    <Container>
      <Row className="info-row mb-4">
        <Col md={12} lg={6}>
          <Card className="h-100 info-2">
            <Card.Body>
              <Card.Title>Welcome to <br></br>Imagine Seniorcare Inc!</Card.Title>
              <Card.Text>
                At Imagine Senior Care, we are dedicated to providing compassionate and personalized care for your loved ones. Our team of fully trained professionals is committed to ensuring that every resident receives the highest level of support, assistance, and resources. We understand the unique needs of seniors and their families, and we strive to create a warm and welcoming environment where everyone feels at home. Our services are designed to enhance the quality of life for our residents, offering peace of mind to their families.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="h-100 info-img">
            <Card.Img variant="top" src={image1} alt="Our Team" />
          </Card>
        </Col>
      </Row>
      <Row className="info-row">
        <Col md={12} lg={6} className="order-lg-1 order-md-2 order-2">
          <Card className="h-100 info-img1">
            <Card.Img variant="top" src={image2} alt="Our Services" />
          </Card>
        </Col>
        <Col md={12} lg={6} className="order-lg-2 order-md-1 order-1">
          <Card className="h-100 info-1">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At Imagine Senior Care, our mission is to deliver compassionate healthcare to loved ones with specialized needs. We are devoted to providing a full range of support and assistance to seniors and families throughout the Bay Area. Our goal is to offer professional and individualized care in Assisted Living, Board & Care, and Memory Care. We are committed to fostering a community where seniors can thrive, ensuring their safety, comfort, and well-being. We strive to enhance the quality of life for our residents through personalized care plans.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default InfoSection;
