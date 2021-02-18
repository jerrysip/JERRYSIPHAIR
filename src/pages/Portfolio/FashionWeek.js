import React, {Component} from "react";
import FashionUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionUI.js";
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/valentino4.jpg";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/ralph.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/IMG_6700.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/yeezy.jpg";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/lela.jpg";
import img6 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/leisurep2017.jpg";
import img7 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/chinaday5.jpg";
import img8 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/IMG_6660.JPG";
import img9 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/Ralph-Lauren_9_bd_ale_0079.jpg";

class FashionWeek extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <FashionUI imgsrc={img1} title="Valentino S/S 2019" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img2} title="Ralph Lauren S/S 2018" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img3} title="Miu Miu S/S 2019" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img4} title="Yeezy Season 4" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img5} title="Lela Rose S/S 2020" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img6} title="Leisure Projects S/S 2018" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img7} title="China Day S/S 2019" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img8} title="Miu Miu S/S 2019" />
          </div>
          <div className="col-md-4">
            <FashionUI imgsrc={img9} title="Ralph Lauren 50th Anniversary" />
          </div>
        </div>
      </div>
    );
  }
}

export default FashionWeek;
