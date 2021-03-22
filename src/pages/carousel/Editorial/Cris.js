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
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris1.jpg";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris2.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris3.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris4.jpg";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris5.jpg";
import img6 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/cris6.jpg";

function Cris() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={6} xl={3}>
          <Image src={img2} rounded />
        </Col>

        <Col xs={6} xl={3}>
          <Image src={img3} rounded />
        </Col>
        <Col className="mt-4 mt-xl-0" xs={6} xl={3}>
          <Image src={img4} rounded />
        </Col>
        <Col className="mt-4 mt-xl-0" xs={6} xl={3}>
          <Image src={img1} rounded />
        </Col>
        <Col className="mt-4" xs={6} xl={3}>
          <Image src={img5} rounded />
        </Col>
        <Col className="mt-4" xs={6} xl={3}>
          <Image src={img6} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Cris;
