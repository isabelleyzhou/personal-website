import React, { Component } from 'react';
import './App.css';

import leaves from './leaves_background.jpg';
import me from './me.png';
import laurel from './laurel.png'

import About from './About.js';
import Experiences from './Experiences.js'
import Projects from './Projects.js'
import Link from './Link.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="App-header">
          <img src={leaves} className= "App-logo" alt="logo"></img>
          <div class="centered">
            <img src={me} alt="pic"></img>
            <div class="bordered">
              <img src={laurel} alt="border"></img>
            </div>
          </div>
        </div>
        <About description= "I like dogs."/>
        <Experiences />
        <Projects />
        <Link />

      </div>
    );
  }
}

export default App;
