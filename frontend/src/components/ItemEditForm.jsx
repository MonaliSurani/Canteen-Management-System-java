import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/APIconstants";

export function ItemEditForm() {
    const params = useParams();
    const [formData, setFormData] = useState({
        itemId: '',
        itemName: '',
        itemPrice: '',
        availableNo: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading when submitting
        try {
            const result = await axios.put(`${BASE_URL}/item/update/`, formData);
            console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
            setError("Error updating item. Please try again.");
        } finally {
            setIsLoading(false); // Ensure to stop loading regardless of outcome
        }
    }

    const populateItemState = async () => {
        setIsLoading(true); // Start loading when fetching
        try {
            const result = await axios.get(`${BASE_URL}/item/fetch/${params.itemName}`);
            console.log(result);

            const itemData = result.data;

            if (itemData) {
                setFormData({
                  ...formData,
                  itemId: itemData.itemId,
                  itemName: itemData.itemName,
                  itemPrice: itemData.itemPrice,
                  availableNo: itemData.availableNo
                });
            } else {
                console.log("No data found for the given item");
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching item data. Please try again.");
        } finally {
            setIsLoading(false); // Ensure to stop loading regardless of outcome
        }
    };

    useEffect(() => {
        populateItemState();
    }, []);

    return (
        <Container>
            <h3>Update the information about {params.itemName} here</h3>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>New Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter new price" name="itemPrice" value={formData.itemPrice} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Available Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter available number" name="availableNo" value={formData.availableNo} onChange={handleChange} />
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
                    {isSubmitted && <Alert variant="success">Item updated successfully!</Alert>}
                </Form>
            )}
        </Container>
    );
}
