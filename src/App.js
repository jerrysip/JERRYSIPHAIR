import React from 'react'
import MainComponent from './components/MainComponent';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '/Users/mac/Desktop/jerrysiphair-react/src/pages/About/About.js'
import Contact from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Contact/Contact.js'
import FashionWeek from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/FashionWeek.js'
import Mens from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Mens.js'
import Press from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Press.js'
import Bridal from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Bridal.js'
import Editorial from '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/Editorial.js'

function App() {
  return (
<>
<Router>
<MainComponent />

<Switch>
  <Route exact path='./about' component={About} />
  <Route exact path='./contact' component={Contact} />
  <Route exact path='./fashion-week' component={FashionWeek} />
  <Route exact path='./bridal' component={Bridal} />
  <Route exact path='./mens' component={Mens} />
  <Route exact path='./press' component={Press} />
  <Route exact path='./editorial' component={Editorial} />
</Switch>

</Router>
</>
  );
}

export default App;
