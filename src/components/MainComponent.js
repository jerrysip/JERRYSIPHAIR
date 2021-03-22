import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "/Users/mac/Desktop/jerrysiphair-react/src/pages/About/About.js";
import Contact from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Contact/Contact.js";
import FashionWeek from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionWeek.js";
import Mens from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Mens.js";
import Press from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Press.js";
import Bridal from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Bridal.js";
import Editorial from "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Editorial.js";
import Header from "/Users/mac/Desktop/jerrysiphair-react/src/components/Navbar.js";
import HomeComponent from "/Users/mac/Desktop/jerrysiphair-react/src/components/HomeComponent.js";
import Allyson from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Allyson.js";
import Becky from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Becky.js";
import Carol from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Carol.js";
import Chelsea from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Chelsea.js";
import Corina from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Corina.js";
import Rachel from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Bridal/Rachel.js";
import BJ from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/BJ.js";
import Cris from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/Cris.js";
import Pvolve from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/Pvolve.js";
import GQ from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/GQ.js";
import ZoeReport from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/ZoeReport.js";
import Barneys from "/Users/mac/Desktop/jerrysiphair-react/src/pages/carousel/Editorial/Barneys.js";
function MainComponent() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fashion-week" component={FashionWeek} />
          <Route exact path="/bridal" component={Bridal} />
          <Route exact path="/mens" component={Mens} />
          <Route exact path="/press" component={Press} />
          <Route exact path="/editorial" component={Editorial} />
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/allyson" component={Allyson} />
          <Route exact path="/becky" component={Becky} />
          <Route exact path="/chelsea" component={Chelsea} />
          <Route exact path="/corina" component={Corina} />
          <Route exact path="/carol" component={Carol} />
          <Route exact path="/bj" component={BJ} />
          <Route exact path="/rachel" component={Rachel} />
          <Route exact path="/cris" component={Cris} />
          <Route exact path="/gq" component={GQ} />
          <Route exact path="/barneys" component={Barneys} />
          <Route exact path="/pvolve" component={Pvolve} />
          <Route exact path="/zoereport" component={ZoeReport} />

          <Redirect to="/home" component={HomeComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainComponent;
