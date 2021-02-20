import React from 'react'
import me from '/Users/mac/Desktop/jerrysiphair-react/src/Images/about/me2.jpg'
import '/Users/mac/Desktop/jerrysiphair-react/src/pages/About/About.css'
import { Container, Row, Col  } from 'react-bootstrap'

function About() {
    return (
        <Container >
            <Row>
        
        <Col className="overflow-hidden">

        <img className="me" src={me} alt="me" />
      </Col>
      <Col className="oveflow-hidden">
<div className="content">
    <p>My name is Jerry Siphavong and I am a first generation American hairstylist. Growing up in poverty, my parents always taught me to work hard and dedicate myself to my passion. They taught me to choose a career that made me happy, and I chose hair. For years I worked as a receptionist in salons because I couldn’t afford to go to cosmetology school. An amazing former boss of mine, Julien Farel, offered to pay for my tuition to become a licensed hairstylist. I will be forever grateful for this selfless gift he has given me.  </p>
    <p>Throughout my career I have assisted some of the best hairstylists in the game. Many of those stylists have introduced me to major magazine publications such as Vogue, GQ, etc. From there , I’ve had the honor of working with world renown photographers such as Annie Leibovitz and Nathanial Goldberg. My dreams came true when I started doing shows at New York and Paris Fashion Week with designers such as Miu Miu, Valentino, Ralph Lauren, etc. I even had the chance to travel the world to become an editorial stylist. I’ve been lucky enough to have styled some amazing clients such as Maria Sherapova, Lea Michele, Karlie Kloss, and many more. </p>
        <p>Through out my career I’ve had the opportunity to meet and work with some of the best in the business. Learning, growing, and dedication has pushed me to be a better hairstylist and a better person. I will never take my life for granted knowing that I had the privilege and honor of these rare opportunities. I will always try to push to become the best person I can possibly be. Life is all about experiences and I will never forget where I came from and how much I have worked to get to where I am. </p>
</div>
        </Col>
        
        </Row>
        </Container>
    )
}

export default About
