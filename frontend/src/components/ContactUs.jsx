
import React, { useState } from 'react';
import './ContactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

/*
const handleMouseOver = () => {
  setButtonColor('#2c3e50'); // Change the color to desired color on mouse over
};

// Function to handle mouse out event
const handleMouseOut = () => {
  setButtonColor('#2980b9'); // Reset the color on mouse out
};*/
export function ContactUs(){
  const phoneNumber = "+1 (123) 456-7890";
  const emailAddress = "contact@canteen.com";
 /* const [buttonColor, setButtonColor] = useState('#2980b9');*/

  return (
    <div className="container">
      <Row>
        <Col style={{}}>
      <h1 style={{textAlign:'center',paddingTop:'30px', marginBottom:'20px' ,color:'#2980b9'}}>Message Us</h1>
      <Form style={{textAlign:'left' , color:'#2980b9', margin:'20px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{marginBottom:'1px'}}>
        <Form.Label style={{margin:'5px',fontSize:'14px'}}>TELL US YOUR NAME *</Form.Label>
        <Row>
        <Col>
        
        <Form.Control type="fname" placeholder='First Name' style={{ '::placeholder': { color: '#72c3e3' } }} />
        </Col>
        <Col>
        
        <Form.Control type="lname" placeholder='Last Name' />
        </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{margin:'5px' ,fontSize:'14px'}}>ENTER YOUR EMAIL *</Form.Label>
        <Form.Control type="email" placeholder='Eg. example@gmail.com' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{margin:'5px',fontSize:'14px'}}>ENTER PHONE NUMBER</Form.Label>
        <Form.Control type="number" placeholder='Eg. +91-9876543210' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{margin:'5px' ,fontSize:'14px'}}>MESSAGE *</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Write us a Message'/>
      </Form.Group>
      <Button as="input" 
      type="submit" 
      value="Submit"
     // onMouseOver={handleMouseOver} 
      //onMouseOut={handleMouseOut} 
       style={{marginLeft:'200px',marginTop:'10px',backgroundColor:'#2980b9',fontSize:'14px'}}/>{' '}
     </Form>
    
      </Col>
      <Col style={{backgroundColor:'#2980b9',opacity:'0.7',color:'#BFCFE7'}}>
      <h1 style={{textAlign:'center',marginTop:'10px'}}>Contact Us</h1>
     

      <div className="contact-details">
      <div style={{textAlign:'left',marginLeft:'4rem',marginTop:'3rem',color:'#BFCFE7'}}>
      <RoomOutlinedIcon style={{ fontSize: '40px' }} />
      <span style={{ fontSize: '30px', marginLeft: '10px', verticalAlign: 'middle' }}>Address</span>
    </div>

      <p style={{textAlign:'left',marginLeft: '7rem',marginTop:'1rem',color:'#BFCFE7'}}>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
      
      <div style={{textAlign:'left',marginLeft:'4rem',marginTop:'3rem',color:'#BFCFE7'}}>
      <LocalPhoneOutlinedIcon style={{ fontSize: '40px' }} />
      <span style={{ fontSize: '30px', marginLeft: '10px', verticalAlign: 'middle' }}>Lets Talk</span>
      <p style={{textAlign:'left',marginLeft: '3rem',marginTop:'1rem',color:'#BFCFE7'}}>{phoneNumber}</p>
      
    </div>
        
    <div style={{textAlign:'left',marginLeft:'4rem',marginTop:'3rem',color:'#BFCFE7'}}>
      <MailOutlinedIcon style={{ fontSize: '40px' }} />
      <span style={{ fontSize: '30px', marginLeft: '10px', verticalAlign: 'middle' }}>General Support</span>
      <p style={{textAlign:'left',marginLeft: '3rem',marginTop:'1rem',color:'#BFCFE7'}}>{emailAddress}</p>
      
    </div>
       
        
      </div>

      
      </Col>
      </Row>
    </div>
  );
};


