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
import img1 from "../../../Images/editorial/zoe1.jpg";
import img2 from "../../../Images/editorial/zoe2.jpg";
import img3 from "../../../Images/editorial/zoe3.jpg";
import img4 from "../../../Images/editorial/zoe4.jpg";
import img5 from "../../../Images/editorial/zoe5.jpg";

function ZoeReport() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={6}>
          <Image src={img2} rounded />
        </Col>

        <Col xs={6}>
          <Image src={img3} rounded />
        </Col>
        <Col className="mt-5" xs={6}>
          <Image src={img4} rounded />
        </Col>
        <Col className="mt-5" xs={6}>
          <Image src={img1} rounded />
        </Col>
        <Col className="mt-5" xs={6}>
          <Image src={img5} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ZoeReport;
