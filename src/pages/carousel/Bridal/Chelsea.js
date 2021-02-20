import React from 'react'
import { Carousel, Container, Row, Col  } from 'react-bootstrap'
import img1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea.jpg'
import img2 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea1.jpg'
import img3 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea2.jpg'
import img4 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea3.jpg'
import img5 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea4.jpg'
import img6 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea5.jpg'
import img7 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelsea6.jpg'


import '/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Chelsea.css'



function Chelsea() {
    return (
        <Container fluid>
        <Row className="justify-content-center">
           
    <Col>
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img className="image1 justify-content-center" src={img1} alt="image 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image2 justify-content-center" src={img2} alt="image 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image3 justify-content-center" src={img3} alt="image 3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image4 justify-content-center" src={img4} alt="image 4" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image5 justify-content-center" src={img5} alt="image 5" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image6 justify-content-center" src={img6} alt="image 5" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image7 justify-content-center" src={img7} alt="image 5" />
                </Carousel.Item>
            </Carousel>
        </div>
                </Col>
                <Col xs={3}></Col>
                </Row>
                </Container>
    )
}

export default Chelsea
