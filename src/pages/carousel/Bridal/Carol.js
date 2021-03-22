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
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/carol1.JPG";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/carol2.JPG";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/carol3.JPG";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/carol4.JPG";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/carol5.JPG";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Carol.css";

function Carol() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={6} md={4}>
          <Image src={img3} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={img4} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={img1} rounded />
        </Col>
        <Col className="mt-4" xs={6} md={4}>
          <Image src={img5} rounded />
        </Col>

        <Col className="mt-4" xs={6} md={4}>
          <Image src={img2} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Carol;
