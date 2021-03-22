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
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/pvolve1.JPG";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/pvolve2.jpg";

function Pvolve() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col className="mt-4 mt-xl-0" xs={6} xl={3}>
          <Image src={img1} rounded />
        </Col>
        <Col className="mt-4 mt-xl-0" xs={6} xl={3}>
          <Image src={img2} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Pvolve;
