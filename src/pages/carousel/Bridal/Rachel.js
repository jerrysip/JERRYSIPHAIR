import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/rachel1.jpg'
import img2 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/rachel2.jpg'
import img3 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/rachel3.jpg'
import img4 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/rachel4.jpg'





import '/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Rachel.css'



function Rachel() {
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


            </Carousel>
        </div>
    )
}

export default Rachel
