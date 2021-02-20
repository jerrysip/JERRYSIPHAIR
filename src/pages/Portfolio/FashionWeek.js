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
import Hero from '/Users/mac/Desktop/jerrysiphair-react/src/pages/hero/Hero.js'

class FashionWeek extends Component {
  render() {
    return (
      <>
      <Hero />
      <div className="fashion text-center mt-5 pt-5"></div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 ">
            <FashionUI 
            imgsrc={img1} 
            title="Valentino S/S 2019" 
            description="Location: Paris, France"
            lead="Lead: Guido Palau"
            site="https://www.vogue.com/fashion-shows/spring-2019-ready-to-wear/valentino/slideshow/collection"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img2} 
            title="Ralph Lauren S/S 2018" 
            lead="Lead: Guido Palau"
            description="Location: New York City"
            site="https://www.vogue.com/fashion-shows/fall-2018-ready-to-wear/ralph-lauren/slideshow/collection"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img3} 
            title="Miu Miu S/S 2019" 
            lead="Lead: Guido Palau"
            description="Location: Paris, France"
            site="https://www.vogue.com/fashion-shows/spring-2019-ready-to-wear/miu-miu"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img4} 
            title="Yeezy Season 4" 
            lead="Lead: Guido Palau"
            description="Location: New York City"
            site="https://www.vogue.com/fashion-shows/spring-2017-ready-to-wear/kanye-west-adidas-originals/slideshow/collection"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img5} 
            title="Lela Rose S/S 2020" 
            lead="Lead: Gio Vaccari"
            description="Location: New York City"
            site="https://www.vogue.com/fashion-shows/spring-2020-ready-to-wear/lela-rose/slideshow/collection"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img6} 
            title="Leisure Projects S/S 2018"
            lead="Lead: Gong Jira" 
            description="Location: Bangkok, Thailand"
            site="https://www.leisureprojectsbkk.com/collection/ss17/#campaign"/>
          </div>
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img7} 
            title="Xu Zhi S/S 2020" 
            lead="Lead: Shingo"
            description="Location: New York City"
            site="https://www.nowfashion.com/xu-zhi-spring-summer-2020-shanghai-28640/shots/1393292"/>
          </div>
 
          <div className="col-md-4">
            <FashionUI 
            imgsrc={img9} 
            title="Ralph Lauren 50th Anniversary" 
            lead="Lead: Guido Palau"
            description="Location: New York City"
            site="https://www.vogue.com/fashion-shows/spring-2018-ready-to-wear/ralph-lauren/slideshow/collection"/>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default FashionWeek;
