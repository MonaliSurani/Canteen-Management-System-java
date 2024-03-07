import React from 'react';
import Card from 'react-bootstrap/Card';

import Monali from "../Photos/Monali.jpeg"; 
import Apurv from "../Photos/Apurv.jpg";
import Chirayu from "../Photos/Chirayu.jpeg";
import Anjum from "../Photos/Anjum.jpg";
import Shashank from "../Photos/Shashank.jpg";


function About() {

  return (
    <div className="d-flex justify-content-around mt-5">
      <Card style={{ width: '18rem', margin: '0 1rem' , height :'21rem',marginBottom: '25px'}} className="shadow">
        <Card.Img variant="top" src={Monali} />
        <Card.Body style={{}}>
          <Card.Title style={{color:'#87CEEB', textAlign: 'center',fontSize: '20px'}}>Monali Surani</Card.Title>
          <Card.Text style={{color:'#b5e9fd',color:'#b5e9fd' , textAlign: 'center', fontSize: '16px'}}>Pursuing PG-DAC from CDAC-Juhu. </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , margin: '0 1rem' , height :'21rem' }} className="shadow">
        <Card.Img variant="top" src={Apurv} />
        <Card.Body>
          <Card.Title style={{color:'#87CEEB', textAlign: 'center',fontSize: '20px'}}>Apurv Gore</Card.Title>
          <Card.Text style={{color:'#b5e9fd',color:'#b5e9fd' , textAlign: 'center', fontSize: '16px'}}>Pursuing PG-DAC from CDAC-Juhu.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , margin: '0 1rem' , height :'21rem' }} className="shadow">
        <Card.Img variant="top" src={Chirayu} />
        <Card.Body>
          <Card.Title style={{color:'#87CEEB', textAlign: 'center',fontSize: '20px'}}>Chirayu Vibhute</Card.Title>
          <Card.Text style={{color:'#b5e9fd',color:'#b5e9fd' , textAlign: 'center', fontSize: '16px'}}>Pursuing PG-DAC from CDAC-Juhu.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '0 1rem', height :'21rem'  }} className="shadow">
        <Card.Img variant="top" src={Anjum} />
        <Card.Body>
          <Card.Title style={{color:'#87CEEB', textAlign: 'center',fontSize: '20px'}}>Anjum Naaz</Card.Title>
          <Card.Text style={{color:'#b5e9fd',color:'#b5e9fd' , textAlign: 'center', fontSize: '16px'}}>Pursuing PG-DAC from CDAC-Juhu.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '0 1rem' , height :'21rem' }} className="shadow">
        <Card.Img variant="top" src={Shashank} />
        <Card.Body>
          <Card.Title style={{color:'#87CEEB' , textAlign: 'center',fontSize: '20px'}}>Shasank Dalvi</Card.Title>
          <Card.Text style={{color:'#b5e9fd' , textAlign: 'center', fontSize: '16px'}}>Pursuing PG-DAC from CDAC-Juhu.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;

{/*import { Card } from "react-bootstrap";
import Kanika from "../Photos/Monali.jpeg"; 
import Apurv from "../Photos/Apurv.jpg";
import Archit from "../Photos/Chirayu.jpeg";
import Anjum from "../Photos/Anjum.jpg";
import Shashank from "../Photos/Shashank.jpg";

const TeamMembers = () => {
 return (
   <div className="d-flex justify-content-around mt-5">
     <Card style={{ width: '18rem', margin: '0 1rem' }} className="shadow">
       <Card.Img variant="top" src={Kanika} />
       <Card.Body>
         <Card.Title>Monali Surani</Card.Title>
         <Card.Text>Student at CDAC, Mumbai</Card.Text>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem', margin: '0 1rem' }} className="shadow">
       <Card.Img variant="top" src={Apurv} />
       <Card.Body>
         <Card.Title>Apurv Gore</Card.Title>
         <Card.Text>Student at CDAC, Mumbai</Card.Text>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem', margin: '0 1rem' }} className="shadow">
       <Card.Img variant="top" src={Archit} />
       <Card.Body>
         <Card.Title>Chirayu Vibhute</Card.Title>
         <Card.Text>Student at CDAC, Mumbai</Card.Text>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem', margin: '0 1rem' }} className="shadow">
       <Card.Img variant="top" src={Anjum} />
       <Card.Body>
         <Card.Title>Anjum Naaz</Card.Title>
         <Card.Text>Student at CDAC, Mumbai</Card.Text>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem', margin: '0 1rem' }} className="shadow">
       <Card.Img variant="top" src={Shashank} />
       <Card.Body>
         <Card.Title>Shashank Dalvi</Card.Title>
         <Card.Text>Student at CDAC, Mumbai</Card.Text>
       </Card.Body>
     </Card>
   </div>
 );
};

export default TeamMembers;*/}
