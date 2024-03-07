import { Carousel, Container, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CanteenManagement.css';

export function CalmConnect() {
    return (
        <>
            <Container className="crouselstyle">
                <Col lg={12} >
                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Container>
            <Container>
                <CardGroup className="mb-5">
                    <Card >
                        <Card.Img variant="top" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL2pvYjE1MzdkZXNpZ24tYmFja2dyb3VuZC0wM2EtYy5qcGc.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="Dark">Read More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top"  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s1ODc5MTA3NC13aWtpbWVkaWEtaW1hZ2Uta293YXdlZHUuanBn.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="Dark">Read More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtODgtMzI1LWt3YW4tNGIuanBn.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="Dark">Read More</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}