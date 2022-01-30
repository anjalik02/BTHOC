import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home'
import Status from './Status'
import Files from './Files'
import Tracker from './Tracker'
import Friends from './Friends'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Status" exact component={() => <Status />} />
          <Route path="/Files" exact component={() => <Files />} />
          <Route path="/Tracker" exact component={() => <Tracker />} />
          <Route path="/Friends" exact component={() => <Friends />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
