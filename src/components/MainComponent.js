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
import Header from '/Users/mac/Desktop/jerrysiphair-react/src/components/Navbar.js'
import HomeComponent from "/Users/mac/Desktop/jerrysiphair-react/src/components/HomeComponent.js";

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
          <Redirect to="/home" component={HomeComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default MainComponent;
