import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/APIconstants";

export function OwnerEditForm({ member, closeModal }) {
    const [formData, setFormData] = useState({
        contact: '',
        password: '',
        email: '' // Assuming the unique identifier for an owner is their email
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Populate form with current owner's data
        if (member) {
            setFormData({
                contact: member.contact, // Assuming `member` has a `contact` field
                password: '', // Password is not fetched for security reasons; the user can input a new one if needed
                email: member.email // Make sure to include the unique identifier
            });
        }
    }, [member]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await axios.post(`${BASE_URL}/owner/update`, formData);
            console.log(result);
            setIsSubmitted(true);
            setTimeout(() => closeModal(), 2000); // Close modal after showing success message
        } catch (error) {
            console.log(error);
            setError("Error updating owner. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <h3>Update owner information</h3>

            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : isSubmitted ? (
                <Alert variant="success">Owner updated successfully</Alert>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter new contact number" name="contact" value={formData.contact} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter new password" name="password" value={formData.password} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Button variant="primary" type="submit" disabled={isLoading}>
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Container>
    );
}
