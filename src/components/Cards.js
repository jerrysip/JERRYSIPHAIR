import React, { Component } from "react";
import Card from "/Users/mac/Desktop/jerrysiphair-react/src/components/CarsUI.js";
import VidCard from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/BridalVideoUI.js";
import img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/chelseabathroom.jpg";
import img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/babyblue.jpg";
import img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/corinasolo.jpg";
import img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/allyson.JPG";
import img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_7032.jpg";
import img6 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_0122.JPG";
import vid1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/bridal/IMG_5334.mp4";
import FashionUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionUI.js";
import Img1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/valentino4.jpg";
import Img2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/ralph.jpg";
import Img3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/IMG_6700.jpg";
import Img4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/yeezy.jpg";
import Img5 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/lela.jpg";
import Img6 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/leisurep2017.jpg";
import Img7 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/chinaday5.jpg";
import Img8 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/IMG_6660.JPG";
import Img9 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/fashionweek/Ralph-Lauren_9_bd_ale_0079.jpg";
import MensUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionUI.js";
import men1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/bj1.JPG";
import men2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/leisuregroup.jpg";
import men3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/linder2.jpg";
import men4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Mens/stevenyeun1.JPG";
import PressUI from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/PressUI.js";
import p1 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Press/glamour.jpg";
import p2 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Press/harpers.jpg";
import p3 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Press/nylon.jpg";
import p4 from "/Users/mac/Desktop/jerrysiphair-react/src/Images/Press/thainews.jpg";

class Cards extends Component {
  render() {
    return (
      <>
        <div className="fashion text-center mt-5 pt-5"></div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4 ">
              <FashionUI 
              imgsrc={Img1} 
              title="Valentino S/S 2019" 
              description="Lead: Guido Palau"
              location="Location: Paris, France" />
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img2} 
              title="Ralph Lauren S/S 2018 " 
              description="Lead: Guido Palau"
              location="Location: New York City"  />
            </div>
            <div className="col-md-4">
              <FashionUI 
              
              imgsrc={Img3} 
              title="Miu Miu S/S 2019" 
              description="Lead: Guido Palau"
              location="Location: Paris, France"  />
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img4} 
              title="Yeezy Season 4" 
              description="Lead: Guido Palau"
              location="Location: New York City" />
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img5} 
              
              title="Lela Rose S/S 2020" 
              description="Lead: Gio Vaccarro"
              location="Location: New York City"/>
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img6} 
              title="Leisure Projects S/S 2018" 
              description="Lead: Gong Jira"
              location="Location: Bangkok, Thailand"/>
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img7} 
              title="China Day S/S 2019" 
              description="Lead: Shingo"
              location="Location: New York City"/>
            </div>
            <div className="col-md-4">
              <FashionUI 
              imgsrc={Img9} 
              title="Ralph Lauren 50th Anniversary" 
              description="Lead: Guido Palau"
              location="Location: New York City"/>
            </div>
            <div className="col-md-4">
              <Card 
              imgsrc={img2} 
              title="Rebecca" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <VidCard 
              videosrc={vid1} 
              title="Chelsea" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <Card 
              
              imgsrc={img3} 
              title="Corina" 
              description="Location: Kingston, New York"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <Card 
              imgsrc={img4} 
              title="Allyson" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <Card 
              imgsrc={img5} 
              title="Rachel" 
              description="Location: New York City"
              year="Year: 2018"/>
            </div>
            <div className="col-md-4">
              <Card 
              imgsrc={img6} 
              
              title="Caroline" 
              description="Location: New York City"
              
              year="Year: 2017"/>
            </div>
            <div className="col-md-4">
              <Card 
              imgsrc={img1} 
              title="More Chelsea" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>

            <div className="col-md-4 ">
              <MensUI 
              imgsrc={men1} 
              title="BJ JEANS 2018" 
              description="Lead: Gong Jira"
              location="Location: Bangkok, Thailand"
              year="Year: 2018"
              />
            </div>
            <div className="col-md-4">
              <MensUI
                imgsrc={men2}
                title="Leisure Projects 2018 "
                description="Lead: Gong Jira"
                location="Location: Bangkok, Thailand"
                year="Year: 2018"
              />
            </div>
            <div className="col-md-4">
              <MensUI 
              imgsrc={men3} 
              title="Linder S/S 2018" 
              description="Lead: Cameron Raines"
              location="Location: New York City"
              year="Year: 2018"/>
            </div>
            <div className="col-md-4">
              <MensUI 
              imgsrc={men4} 
              title="Steven Yeun for GQ Magazine" 
              description="Lead: Thom Priano"
              location="Location: New York City"
              year="Year: 2018"/>
            </div>
            <div className="col-md-4 ">
              <PressUI 
              imgsrc={p1} 
              title="Glamour Magazine" 
              description="Location: New York City"
              year="Year: 2018" />
            </div>
            <div className="col-md-4">
              <PressUI 
              imgsrc={p2} 
              title="Harpers Bazar" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <PressUI 
              imgsrc={p3} 
              title="Nylon Magazine" 
              description="Location: New York City"
              year="Year: 2019"/>
            </div>
            <div className="col-md-4">
              <PressUI 
              imgsrc={p4} 
              title="Thailand News" 
              description="Location: Bangkok, Thailand"
              year="Year: 2018" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;