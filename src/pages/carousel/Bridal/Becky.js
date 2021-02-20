import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '//Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/becky1.jpg'
import img2 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/becky2.jpg'
import img3 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/becky3.jpg'
import img4 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/becky4.jpg'
import img5 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/becky5.jpg'


import '/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Becky.css'



function Becky() {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img className="image1" src={img1} alt="image 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image2" src={img2} alt="image 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image3" src={img3} alt="image 3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image4" src={img4} alt="image 4" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image5" src={img5} alt="image 5" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Becky
