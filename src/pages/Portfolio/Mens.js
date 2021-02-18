import React, {Component} from "react";
import MensUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionUI.js";
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/bj1.JPG";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/leisuregroup.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/linder2.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/stevenyeun1.JPG";

import MensHero from '/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/linder1.JPG'


class Mens extends Component {
  render() {
    return (
      <>
  <img src={MensHero} alt="img 1" width="100%" className="menshero" />
  <div className="fashion text-center mt-5 pt-5"></div>
      <div className="fashion text-center mt-5 pt-5"></div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 ">
            <MensUI 
            imgsrc={img1} 
            title="BJ JEANS Pattaya, Thailand"
            lead="Lead: Gong Jira"
            year="2018" />
          </div>
          <div className="col-md-4">
            <MensUI 
            imgsrc={img2} 
            title="Leisure Projects 2018 Bangkok, Thailand"
            lead="Lead: Gong Jira"
            year="2018" />
          </div>
          <div className="col-md-4">
            <MensUI 
            imgsrc={img3} 
            title="Linder S/S 2018"
            lead="Lead: Cameron Raines"
            year="2018" />
          </div>
          <div className="col-md-4">
            <MensUI 
            imgsrc={img4} 
            title="Steven Yeun for GQ Magazine"
            lead="Lead: Thom Priano"
            year="2016"
             />
          </div>

        </div>
      </div>
      </>
    );
  }
}

export default Mens;
