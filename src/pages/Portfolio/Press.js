import React, { Component } from "react";
import PressUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/PressUI.js";
import img1 from "../../Images/Press/glamour.jpg";
import img2 from "../../Images/Press/harpers.jpg";
import img3 from "../../Images/Press/nylon.jpg";
import img4 from "../../Images/Press/thainews.jpg";

import PressHero from "../../Images/Press/presshero.jpg";

class Press extends Component {
  render() {
    return (
      <>
        <img src={PressHero} alt="img 1" width="100%" className="menshero" />
        <div className="fashion text-center mt-5 pt-5"></div>
        <div className="fashion text-center mt-5 pt-5"></div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 ">
              <PressUI
                imgsrc={img1}
                title="Glamour Magazine"
                location="Location: New York City"
                year="Year: 2018"
              />
            </div>
            <div className="col-md-3">
              <PressUI
                imgsrc={img2}
                title="Harpers Bazar"
                location="Location: New York City"
                year="Year: 2019"
              />
            </div>
            <div className="col-md-3">
              <PressUI
                imgsrc={img3}
                title="Nylon Magazine"
                location="Location: New York City"
                year="Year: 2019"
              />
            </div>
            <div className="col-md-3 mb-5">
              <PressUI
                imgsrc={img4}
                title="Thailand News"
                location="Location: Bangkok, Thailand"
                year="Year: 2018"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Press;
