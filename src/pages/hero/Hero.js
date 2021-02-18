import React from 'react'
import video1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/IMG_5345.mp4';
import '/Users/mac/Desktop/jerrysiphair-react/src/pages/hero/Hero.css'

function Hero() {
    return (
        <div className="hero">
            
          <video 
          className="video"
          autoPlay
          loop
          muted
          width="100%">
              <source src={video1} type="video/mp4" />
          </video>
        </div>
    )
}

export default Hero
