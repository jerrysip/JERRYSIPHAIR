import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
} from "react-bootstrap";
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea.jpg";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea1.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea2.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea3.jpg";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea4.jpg";
import img6 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea5.jpg";
import img7 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea6.jpg";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Chelsea.css";

function Chelsea() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={6} md={4}>
          <Image src={img2} rounded />
        </Col>

        <Col xs={6} md={4}>
          <Image src={img3} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={img4} rounded />
        </Col>
        <Col className="mt-4" xs={6} md={4}>
          <Image src={img5} rounded />
        </Col>
        <Col className="mt-4" xs={6} md={4}>
          <Image src={img1} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Chelsea;
