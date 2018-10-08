import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './NavigationBar.css';

import About from './About.js';
import Experiences from './Experiences.js'
import Projects from './Projects.js'
import Navigation from "./Navigation.js";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <h2>
          <BrowserRouter>
            <Switch>
              <Navigation/>
              <Route exact path="/about" component={About} />
              <Route path="/experiences" component={Experiences} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </BrowserRouter>
        </h2>
      </div>
    );
  }
}

export default NavigationBar;