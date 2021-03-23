import React, { Component } from "react";
import Card from "../components/CarsUI";
import VidCard from "../pages/Portfolio/BridalVideoUI";
import img1 from "../Images/bridal/chelseabathroom.jpg";
import img2 from "../Images/bridal/babyblue.jpg";
import img3 from "../Images/bridal/corinasolo.jpg";
import img4 from "../Images/bridal/allyson.JPG";
import img5 from "../Images/bridal/IMG_7032.jpg";
import img6 from "../Images/bridal/IMG_0122.JPG";
import vid1 from "../Images/bridal/chelseavideo.mp4";
import FashionUI from "../pages/Portfolio/FashionUI.js";
import Img1 from "../Images/fashionweek/valentino4.jpg";
import Img2 from "../Images/fashionweek/ralph.jpg";
import Img3 from "../Images/fashionweek/IMG_6700.jpg";
import Img4 from "../Images/fashionweek/yeezy.jpg";
import Img5 from "../Images/fashionweek/lela.jpg";
import Img6 from "../Images/fashionweek/leisurep2017.jpg";
import Img7 from "../Images/fashionweek/chinaday5.jpg";
import Img8 from "../Images/fashionweek/IMG_6660.JPG";
import Img9 from "../Images/fashionweek/Ralph-Lauren_9_bd_ale_0079.jpg";
import MensUI from "../pages/Portfolio/FashionUI.js";
import men1 from "../Images/Mens/bj1.JPG";
import men2 from "../Images/Mens/leisuregroup.jpg";
import men3 from "../Images/Mens/linder2.jpg";
import men4 from "../Images/Mens/stevenyeun1.JPG";
import PressUI from "../pages/Portfolio/PressUI.js";
import p1 from "../Images/Press/glamour.jpg";
import p2 from "../Images/Press/harpers.jpg";
import p3 from "../Images/Press/nylon.jpg";
import p4 from "../Images/Press/thainews.jpg";

class Cards extends Component {
  render() {
    return (
      <>
        <div className="fashion text-center mt-5 pt-5"></div>
        <div className="card container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="img-responsive  col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img1}
                title="Valentino S/S 2019"
                alt="valentino"
                description="Lead: Guido Palau"
                location="Location: Paris, France"
                site="https://www.vogue.com/fashion-shows/spring-2019-ready-to-wear/valentino/slideshow/collection"
              />
            </div>
            <div className="img-responsive  col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img2}
                title="Ralph Lauren 50th Anniversary S/S 2018 "
                alt="RL"
                description="Lead: Guido Palau"
                location="Location: New York City"
                site="https://www.vogue.com/fashion-shows/fall-2018-ready-to-wear/ralph-lauren/slideshow/collection"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img3}
                title="Miu Miu S/S 2019"
                alt="miumiu"
                description="Lead: Guido Palau"
                location="Location: Paris, France"
                site="https://www.vogue.com/fashion-shows/spring-2019-ready-to-wear/miu-miu"
              />
            </div>
            <div className="img-responsive  col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img4}
                title="Yeezy Season "
                alt="yeezy"
                description="Lead: Guido Palau"
                location="Location: New York City"
                site="https://www.vogue.com/fashion-shows/spring-2017-ready-to-wear/kanye-west-adidas-originals/slideshow/collection"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img5}
                title="Lela Rose S/S 2020"
                description="Lead: Gio Vaccarro"
                alt="lela"
                location="Location: New York City"
                site="https://www.vogue.com/fashion-shows/spring-2020-ready-to-wear/lela-rose/slideshow/collection"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img6}
                title="Leisure Projects S/S 2018"
                alt="leisure"
                description="Lead: Gong Jira"
                location="Location: Bangkok, Thailand"
                site="https://www.leisureprojectsbkk.com/collection/ss17/#campaign"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img7}
                title="China Day S/S 2019"
                alt="chinaday"
                description="Lead: Shingo"
                location="Location: New York City"
                site="https://www.nowfashion.com/xu-zhi-spring-summer-2020-shanghai-28640/shots/1393292"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <FashionUI
                imgsrc={Img9}
                title="Ralph Lauren S/S 2018"
                alt="ralph"
                description="Lead: Guido Palau"
                location="Location: New York City"
                site="https://www.vogue.com/fashion-shows/spring-2018-ready-to-wear/ralph-lauren/slideshow/collection"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img2}
                title="Rebecca"
                alt="becky"
                description="Location: New York City"
                year="Year: 2019"
                site="/becky"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <VidCard
                videosrc={vid1}
                title="Chelsea"
                alt="chelsea"
                description="Location: New York City"
                year="Year: 2019"
                site="/chelsea"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img3}
                title="Corina"
                alt="corina"
                description="Location: Kingston, New York"
                year="Year: 2019"
                site="/corina"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img4}
                title="Allyson"
                alt="allyson"
                description="Location: New York City"
                year="Year: 2019"
                site="/allyson"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img5}
                title="Rachel"
                alt="rachel"
                description="Location: New York City"
                year="Year: 2018"
                site="/rachel"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img6}
                title="Caroline"
                alt="carol"
                description="Location: New York City"
                year="Year: 2017"
                site="/carol"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <Card
                imgsrc={img1}
                title="More Chelsea"
                alt="chels"
                description="Location: New York City"
                year="Year: 2019"
                site="/chelsea"
              />
            </div>

            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <MensUI
                imgsrc={men1}
                title="BJ JEANS 2018"
                alt="bj"
                description="Lead: Gong Jira"
                location="Location: Bangkok, Thailand"
                year="Year: 2018"
                site="/bj"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <MensUI
                imgsrc={men2}
                title="Leisure Projects 2018 "
                alt="leip"
                description="Lead: Gong Jira"
                location="Location: Bangkok, Thailand"
                year="Year: 2018"
                site="https://www.leisureprojectsbkk.com/collection/ss17/#look"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <MensUI
                imgsrc={men3}
                title="Linder S/S 2018"
                alt="linder"
                description="Lead: Cameron Raines"
                location="Location: New York City"
                year="Year: 2018"
                site="https://www.vogue.com/fashion-shows/spring-2019-menswear/linder/slideshow/collection"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <MensUI
                imgsrc={men4}
                title="Steven Yeun for GQ Magazine"
                description="Lead: Thom Priano"
                alt="gq"
                location="Location: New York City"
                year="Year: 2018"
                site="https://www.gq.com/story/best-tweed-suits-for-fall-steven-yeun-walking-dead"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <PressUI
                imgsrc={p1}
                title="Glamour Magazine"
                alt="glamour"
                description="Location: New York City"
                year="Year: 2018"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <PressUI
                imgsrc={p2}
                title="Harpers Bazaar"
                alt="hp"
                description="Location: New York City"
                year="Year: 2019"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <PressUI
                imgsrc={p3}
                title="Nylon Magazine"
                alt="nylon"
                description="Location: New York City"
                year="Year: 2019"
              />
            </div>
            <div className="img-responsive col-12 col-sm-6 col-md-4 col-xl-3 pb-3">
              <PressUI
                imgsrc={p4}
                title="Thailand News"
                alt="thai"
                description="Location: Bangkok, Thailand"
                year="Year: 2018"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
