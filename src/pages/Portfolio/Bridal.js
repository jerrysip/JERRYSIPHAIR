import React, { Component } from "react";
import VidCard from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/BridalVideoUI.js";
import Card from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/BridalUI.js";
import img1 from "../../Images/bridal/chelseabathroom.jpg";
import img2 from "../../Images/bridal/babyblue.jpg";
import img3 from "../../Images/bridal/corinasolo.jpg";
import img4 from "../../Images/bridal/allyson.JPG";
import img5 from "../../Images/bridal/IMG_7032.jpg";
import img6 from "../../Images/bridal/IMG_0122.JPG";
import vid1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelseavideo.mp4";
import bridalhero from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/bridalhero.jpg";

class Bridal extends Component {
  render() {
    return (
      <>
        <img
          src={bridalhero}
          alt="bridalhero"
          width="100%"
          className="bridalhero"
        />
        <div className="fashion justify-content-center mt-5 pt-5"></div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card
                imgsrc={img2}
                title="Rebecca"
                description="Location: New York City"
                year="Year: 2019"
                site="/becky"
              />
            </div>
            <div className="col-md-4">
              <VidCard
                videosrc={vid1}
                title="Chelsea"
                description="Location: New York City"
                year="Year: 2019"
                site="/chelsea"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img3}
                title="Corina"
                description="Location: Kingston, New York"
                year="Year: 2019"
                site="/corina"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img4}
                title="Allyson"
                description="Location: New York City"
                year="Year: 2019"
                site="/allyson"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img5}
                title="Rachel"
                description="Location: New York City"
                year="Year: 2019"
                site="/rachel"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img6}
                title="Caroline"
                description="Location: New York City"
                year="Year: 2019"
                site="/carol"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bridal;
