import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faHandHoldingHeart, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';
import handsImg from '../images/hands.jpg';
import heartsImg from '../images/heart.jpg';
import transportImg from '../images/transport.jpg';

const Services = () => (
  <div className="contact-container">
    <Container fluid className="contact-header text-center">
      <h1 className="display-4">Our Services</h1>
      <p className="contact-jumbo">Let us care for your loved one</p>
    </Container>

    <Container className="services-content">
      <Row className="align-items-center mb-4 serv-marg">
        <Col md={12} lg={6} className="order-lg-1 order-md-2 img-card">
          <img src={handsImg} alt="Service 1" className="img-fluid serv-img" />
        </Col>
        <Col md={12} lg={6} className="order-lg-2 order-md-1">
          <Card className="service-item">
            <Card.Body>
              <FontAwesomeIcon icon={faHandsHelping} className="service-icon" />
              <Card.Title className="serv-head">In-Home Caregivers/Sitters</Card.Title>
              <Card.Text className="serv-body">
                Imagine Seniorcare Inc. provides compassionate in-home caregivers and sitters to ensure seniors receive personalized care and companionship in the comfort of their own homes. Our caregivers assist with daily activities, medication reminders, and provide emotional support to enhance overall well-being.
              </Card.Text>
              <Button variant="primary" className="learn-more-button serv-page">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center mb-4">
        <Col md={12} lg={6} className="order-lg-2 order-md-2 img-card">
          <img src={heartsImg} alt="Service 2" className="img-fluid serv-img" />
        </Col>
        <Col md={12} lg={6} className="order-lg-1 order-md-1">
          <Card className="service-item">
            <Card.Body>
              <FontAwesomeIcon icon={faHandHoldingHeart} className="service-icon" />
              <Card.Title className="serv-head">Complete Assistance in Daily Living/Task</Card.Title>
              <Card.Text className="serv-body">
                We offer comprehensive assistance with daily living tasks to help seniors maintain their independence and quality of life. From meal preparation and personal hygiene to light housekeeping and mobility support, our dedicated team is here to assist with all essential needs.
              </Card.Text>
              <Button variant="primary" className="learn-more-button serv-page">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center mb-4">
        <Col md={12} lg={6} className="order-lg-1 order-md-2 img-card">
          <img src={transportImg} alt="Service 3" className="img-fluid serv-img" />
        </Col>
        <Col md={12} lg={6} className="order-lg-2 order-md-1">
          <Card className="service-item">
            <Card.Body>
              <FontAwesomeIcon icon={faAmbulance} className="service-icon" />
              <Card.Title className="serv-head">Transportation For Medical Appointments</Card.Title>
              <Card.Text className="serv-body">
                Imagine Seniorcare Inc. ensures seniors have reliable transportation to and from medical appointments. Our trained staff provides safe, punctual, and comfortable rides, ensuring clients arrive on time and receive the care they need.
              </Card.Text>
              <Button variant="primary" className="learn-more-button serv-page">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 faq-section">
        <Col>
          <h2 className="faq-services">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="faq-head">What services does Imagine Seniorcare Inc. offer?</Accordion.Header>
              <Accordion.Body>
                Imagine Seniorcare Inc. offers a variety of services including in-home caregivers/sitters, complete assistance in daily living tasks, and transportation for medical appointments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="faq-head">How can I learn more about a specific service?</Accordion.Header>
              <Accordion.Body>
                You can learn more about each service by clicking the "Learn more" button associated with the service you're interested in.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="faq-head">Are your caregivers trained and experienced?</Accordion.Header>
              <Accordion.Body>
                Yes, all of our caregivers are trained and experienced to provide compassionate care and support tailored to the needs of seniors.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Services;
