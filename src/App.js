import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './Header.js';
import About from './About.js';
import Experiences from './Experiences.js'
import Projects from './Projects.js'
import Link from './Link.js'
import NavigationBar from './NavigationBar.js'
import Navigation from "./Navigation.js";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <About/>
          <Experiences/>
          <Projects/>
          <Link/>
      </div>
    );
  }
}

export default App;
