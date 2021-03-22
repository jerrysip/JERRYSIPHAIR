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
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson.JPG";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson1.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson2.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson4.JPG";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson5.jpg";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Allyson.css";

function Allyson() {
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

export default Allyson;
