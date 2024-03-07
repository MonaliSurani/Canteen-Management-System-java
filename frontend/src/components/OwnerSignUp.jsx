import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../services/APIconstants";

export function OwnerSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ owner_id: '', ownerName: '', email: '', contact: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ owner_id: '', ownerName: '', email: '', contact: '', password: '' });

  function register(event) {
    event.preventDefault();
    let url = `${BASE_URL}/owner/register`;
    axios.post(url, formData)
      .then(response => {
        if (response.data.status) {
          alert("Registration successful!");
          //navigate("/signin");
        } else {
          alert("Registration failed!");
        }
      })
      .catch(error => {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'owner_id':
        const idRegex = /^\d{3}$/;
        errorMessage = idRegex.test(value) ? '' : 'Owner ID must be 3 digits';
        break;
      case 'ownerName':
        errorMessage = value.trim().length >= 4 ? '' : 'Name must be at least 4 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = emailRegex.test(value) ? '' : 'Invalid email address';
        break;
      case 'contact':
        const phoneRegex = /^\d{10}$/;
        errorMessage = phoneRegex.test(value) ? '' : 'Phone number must be 10 digits';
        break;
      case 'password':
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        errorMessage = passwordRegex.test(value) ? '' : 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one digit';
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [fieldName]: errorMessage }));
  };

  return (
    <div className="signup-container">
      <Container>
        <Col md={{ span: 3, offset: 5 }}>
          <h3>Please Enter Owner Details</h3>
        </Col>
        <Form onSubmit={register}>
         { /* <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicOwnerId">
                <Form.Label>Owner ID</Form.Label>
                <Form.Control type="text" value={formData.owner_id} name="owner_id" placeholder="Enter Owner ID" onChange={handleChange} onBlur={() => validateField("owner_id", formData.owner_id)} required />
                {errors.owner_id && <span style={{ color: "red" }}>{errors.owner_id}</span>}
              </Form.Group>
            </Col>
  </Row> */ }
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicOwnerName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={formData.ownerName} name="ownerName" placeholder="Enter full name" onChange={handleChange} onBlur={() => validateField("ownerName", formData.ownerName)} required />
                {errors.ownerName && <span style={{ color: "red" }}>{errors.ownerName}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formData.email} name="email" placeholder="Enter email" onChange={handleChange} onBlur={() => validateField("email", formData.email)} required />
                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" value={formData.contact} name="contact" placeholder="Enter Contact Number" onChange={handleChange} onBlur={() => validateField("contact", formData.contact)} required />
                {errors.contact && <span style={{ color: "red" }}>{errors.contact}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formData.password} name="password" placeholder="Password" onChange={handleChange} onBlur={() => validateField("password", formData.password)} required />
                {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Col>
        </Form>
        <Row className="mt-3">
          <Col md={{ span: 4, offset: 4 }}>
            {isSubmitted && (
              <Alert variant="success">Owner Sign Up Successfully Completed!</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
