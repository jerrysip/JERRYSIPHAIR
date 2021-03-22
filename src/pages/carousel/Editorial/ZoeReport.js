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
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/bj1.JPG";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/bj2.JPG";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/bj3.JPG";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/bj4.JPG";

function ZoeReport() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={6} xl={3}>
          <Image src={img2} rounded />
        </Col>

        <Col xs={6} xl={3}>
          <Image src={img3} rounded />
        </Col>
        <Col xs={6} xl={3}>
          <Image src={img4} rounded />
        </Col>
        <Col xs={6} xl={3}>
          <Image src={img1} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ZoeReport;
