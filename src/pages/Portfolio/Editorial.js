import React, { Component } from "react";
import Card from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/EditorialUI.js";

import img1 from "../../Images/editorial/IMG_E1001.jpeg";
import img2 from "../../Images/editorial/purp.JPG";
import img3 from "../../Images/editorial/pvolve3.jpg";
import img4 from "../../Images/editorial/IMG_0068.JPG";
import img5 from "../../Images/editorial/IMG_2862.JPG";
import img6 from "../../Images/editorial/seemanagement-125152-q80-h750-rz3-b125.jpg";
import video1 from "../../Images/editorial/IMG_5348.mp4";

class Cards extends Component {
  render() {
    return (
      <>
        <video className="video" autoPlay loop muted width="100%">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="fashion text-center mt-5 pt-5"></div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={img1}
                title="Cris Horwang for L'Officiel Magazine"
                site="/cris"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img2}
                title="Barneys New York | The Window Magazine"
                site="/barneys"
              />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img3} title="P'Volve Fitness" site="/pvolve" />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img4}
                title="Steven Yeun for GQ Magazine"
                site="/gq"
              />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img5} title="BJ Jeans Bangkok" site="/bj" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img6} title="The Zoe Report" site="/zoereport" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
