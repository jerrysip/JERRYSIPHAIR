import React from 'react'
import Navbar from '../components/Navbar';
import FashionWeek from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionWeek.js'
import Hero from '/Users/mac/Desktop/jerrysiphair-react/src/pages/hero/Hero.js'
import Bridal from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Bridal.js'
import Editorial from '//Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Editorial.js'

function MainComponent() {
    return (
        <div>
            
            <Navbar />
            <Hero />
            <FashionWeek />
            <Bridal />
            <Editorial />
        </div>
    )
}

export default MainComponent
