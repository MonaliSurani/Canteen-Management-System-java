import { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/OwnerServices.js";
import "./Signin.css";

export function OwnerSignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect already authenticated user
    }
  }, [navigate]); // This effect runs once on component mount

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);

      if (result.status) {
        localStorage.setItem("token", result.token);
        const userRole = result.roll;
        localStorage.setItem("userRole", userRole);
        
        navigate("/");
      } else {
        setLoginError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="signin-window">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              {loginError && (
                <Alert variant="danger" className="mt-3">
                  {loginError}
                </Alert>
              )}
            </div>
          </Col>
          <br />
          <br />
          
        </Row>
      </Container>
    </div>
  );
}
