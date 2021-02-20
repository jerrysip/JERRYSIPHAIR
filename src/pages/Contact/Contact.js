import React from "react";
import { Link } from "react-router-dom";
import me from "/Users/mac/Desktop/jerrysiphair-react/src/Images/about/me1.JPG";
import "/Users/mac/Desktop/jerrysiphair-react/src/pages/Contact/Contact.css";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <img className="me1" src={me} alt="me" />
        </Col>
        <Col>
          <div className="content">
 <h2 className="contact">Let's Get In Touch! </h2>   
 <br/>
 <b>NAME:</b><p>Jerry Siphavong</p>
 <b>EMAIL:</b><p>Jerrysiphavong@icloud.com</p>
 <b>PHONE NUMBER:</b><p>(404) 519-651</p>
 <b>INSTAGRAM:</b><p>www.instagram.com/jerrysip</p>
 <b>FACEBOOK:</b><p>www.facebook.com/jerrysiphavong</p>

    
    
    
    
    </div>
      
          
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
