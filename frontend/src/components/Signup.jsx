import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../services/APIconstants";
import signup from "../Photos/signup.jpg";

export function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employee_id: '',
    employeeName: '',
    email: '',
    contact: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    employee_id: '',
    employeeName: '',
    email: '',
    contact: '',
    password: '',
  });
  const [registrationStatus, setRegistrationStatus] = useState(""); // To handle the display of different messages

  function register(event) {
    event.preventDefault();
    if (validateForm()) {
      let url = `${BASE_URL}/employee/register`;
      axios.post(url, formData)
        .then(response => {
          if (response.data.status) {
            setRegistrationStatus("success");
            setTimeout(() => {
              navigate("/");
            }, 5000);
          } else {
            setRegistrationStatus("failure");
          }
        })
        .catch(error => {
          console.error("Error during registration:", error);
          setRegistrationStatus("error");
        });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'employee_id':
        const idRegex = /^\d{3}$/;
        errorMessage = idRegex.test(value) ? '' : 'Employee ID must be 3 digits';
        break;
      case 'employeeName':
        const nameRegex = /^[a-zA-Z]+$/;
        errorMessage = nameRegex.test(value.trim()) && value.trim().length >= 4? '' : 'Name must be at least 4 characters';
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

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach(fieldName => {
      const value = formData[fieldName];
      validateField(fieldName, value);
      if (errors[fieldName]) {
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <div className="signup-container">
      <Container style={{backgroundColor:'white',opacity:'0.8'}}>
          <h3 style={{marginLeft:'3rem',marginTop:'3rem',paddingBottom:'2rem', textAlign:'left',color:'#2980b9'}}>Fill your Details</h3>
        <Form onSubmit={register} style={{textAlign:'left'}}> 
          {/* Form groups for inputs */}
          <Row >
            <Col style={{marginLeft:'3rem'}}>
              <Form.Group className="mb-3" controlId="formBasicEmpId" style={{paddingBottom:'1rem'}}>
                <Form.Control type="text" value={formData.employee_id} name="employee_id" placeholder="Enter Employee id"
                style={{ border: 'none',
                 borderBottom: '1px solid #2980b9', 
          
                 outline: 'none', 
                marginBottom: '10px',
        }} 
        onChange={handleChange} onBlur={() => validateField("employee_id", formData.employee_id)} required />
                {errors.employee_id && <span style={{ color: "red" }}>{errors.employee_id}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmpName"  style={{paddingBottom:'1rem'}}>
                <Form.Control type="text" value={formData.employeeName} name="employeeName" placeholder="Enter full name" 
                  style={{ border: 'none',
                  borderBottom: '1px solid #2980b9', 
                  outline: 'none', 
                  marginBottom: '10px'}}
                onChange={handleChange} onBlur={() => validateField("employeeName", formData.employeeName)} required />
                {errors.employeeName && <span style={{ color: "red" }}>{errors.employeeName}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail"  style={{paddingBottom:'1rem'}}>
                
                <Form.Control type="email" value={formData.email} name="email" placeholder="Enter email"
                  style={{ border: 'none',
                  borderBottom: '1px solid #2980b9', 
                  outline: 'none', 
                  marginBottom: '10px'}}
                onChange={handleChange} onBlur={() => validateField("email", formData.email)} required />
                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
              </Form.Group>
              <Form.Group className="mb-3"  style={{paddingBottom:'1rem'}}>
               
                <Form.Control type="text" value={formData.contact} name="contact" placeholder="Enter Contact Number" 
                  style={{ border: 'none',
                  borderBottom: '1px solid #2980b9', 
                  outline: 'none', 
                  marginBottom: '10px'}}
                onChange={handleChange} onBlur={() => validateField("contact", formData.contact)} required />
                {errors.contact && <span style={{ color: "red" }}>{errors.contact}</span>}
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicPassword"  style={{paddingBottom:'1rem'}}>
             
                <Form.Control type="password" value={formData.password} name="password" placeholder="Enter Password" 
                  style={{ border: 'none',
                  borderBottom: '1px solid #2980b9', 
                  outline: 'none', 
                  marginBottom: '10px'}}
                onChange={handleChange} onBlur={() => validateField("password", formData.password)} required />
                {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword"  style={{paddingBottom:'1rem'}}>
             
             <Form.Control type="password" value={formData.password} name="re-password" placeholder="Retype Password" 
               style={{ border: 'none',
               borderBottom: '1px solid #2980b9', 
               outline: 'none', 
               marginBottom: '10px'}}
             onChange={handleChange} onBlur={() => validateField("re-password", formData.password)} required />
             {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
           </Form.Group>
            <Button variant="primary" type="submit"  style={{marginBottom:'2rem'}}>
              Sign Up
            </Button>
          </Col>
         
            <Col>
              <img src={signup} style={{marginLeft:'30px',width:'27rem', height:'30rem'}} />
            </Col>
          </Row>
          
          
         
        </Form>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            {registrationStatus === "success" && (
              <Alert variant="success">
                You have successfully registered. Wait for the confirmation of your membership. This may take 1 working day. After that, you can login.
              </Alert>
            )}
            {registrationStatus === "failure" && (
              <Alert variant="danger">Employee already exists.</Alert>
            )}
            {registrationStatus === "error" && (
              <Alert variant="danger">An error occurred during registration.</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
