import React, { Component } from 'react'
import VidCard from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/BridalVideoUI.js'
import Card from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/BridalUI.js';
import img1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelseabathroom.jpg'
import img2 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/babyblue.jpg'
import img3 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/corinasolo.jpg'
import img4 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson.JPG'
import img5 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_7032.jpg'
import img6 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_0122.JPG'
import vid1 from '/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_5334.mp4'

class Bridal extends Component {

    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
               
                <div className="row">

                    <div className="col-md-4">
                    <Card imgsrc={img2} title="Rebecca"/>
                    </div>
                    <div className="col-md-4">
                    <VidCard videosrc={vid1} title="Chelsea"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3} title="Corina"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img4} title="Allyson"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img5} title="Rachel"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img6} title="Caroline"/>
                    </div>


                </div>
                
            </div>
        );
    }
}

export default Bridal;