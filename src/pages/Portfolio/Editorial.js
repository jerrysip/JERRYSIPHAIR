import React, { Component } from 'react'
import Card from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/EditorialUI.js';

import img1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/IMG_E1001.jpeg'
import img2 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/purp.JPG'
import img3 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/pvolve3.jpg'
import img4 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/IMG_0068.JPG'
import img5 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/IMG_2862.JPG'
import img6 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/editorial/seemanagement-125152-q80-h750-rz3-b125.jpg'


class Cards extends Component {

    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Cris Horwang for L'Officiel Magazine" />
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2} title="Barneys New York | The Window Magazine"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3} title="P'Volve Fitness"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img4} title="Steven Yeun for GQ Magazine"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img5} title="BJ Jeans Bangkok"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img6} title="The Zoe Report"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Cards;