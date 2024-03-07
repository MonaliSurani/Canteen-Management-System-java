import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Canteen.css";
import Accordion from "react-bootstrap/Accordion";

export function Canteen() {
  return (
    <>
      <Container fluid className="crouselstyle container-no-padding">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1544461772-722f499fa2a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1571863005528-d4b29307e35a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Container>

      <Container className="card-container">
        <Row className="justify-content-around">
  <Col md={4}>
    <Card className="card">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Title>Explore the Rich Flavors of North Indian Cuisine</Card.Title>
        <Card.Text className="card-text">
          Indulge in a culinary journey filled with aromatic spices and traditional North Indian delights.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card className="card">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Title>Discover the Vibrant Tastes of South Indian Cuisine</Card.Title>
        <Card.Text className="card-text">
          Immerse yourself in the diverse flavors of South India, where every dish tells a story of tradition and authenticity.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card className="card">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Title>Experience the Delights of Continental Cuisine</Card.Title>
        <Card.Text className="card-text">
          Savor the fusion of flavors in our Continental dishes, crafted to elevate your dining experience to new heights.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
        
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      Q: What's the process for settling bills in the canteen, and what payment methods are accepted?
    </Accordion.Header>
    <Accordion.Body>
      To settle your bill, approach the designated payment counter where our staff will assist you. We accept various payment methods, including cash, credit/debit cards, and digital wallets, ensuring a convenient and seamless payment experience for our customers.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>
      Q: How can I provide feedback or suggest new menu items for the canteen?
    </Accordion.Header>
    <Accordion.Body>
      Your feedback is valuable to us! Feel free to approach our customer service desk or use our online feedback form. We appreciate suggestions for new menu items and are eager to enhance our offerings based on your preferences.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>
      Q: Are there any loyalty programs or discounts available for regular canteen customers?
    </Accordion.Header>
    <Accordion.Body>
      Absolutely! We value our loyal customers. Check out our loyalty programs or promotional discounts, which may include special offers, loyalty points, or exclusive discounts for frequent canteen visitors.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>
      Q: What steps are taken to ensure food safety and hygiene in the canteen?
    </Accordion.Header>
    <Accordion.Body>
      Ensuring your safety is our priority. We strictly adhere to hygiene standards, conduct regular food safety training for our staff, and implement rigorous cleaning schedules. Rest assured, we maintain a clean and safe environment to provide you with a pleasant dining experience.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

      </Container>
    </>
  );
}




