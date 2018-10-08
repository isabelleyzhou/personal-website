import React, { Component } from 'react';
import './Header.css';

import leaves from './leaves_background.jpg';
import me from './me.png';
import laurel from './laurel.png'

class Header extends Component {
  render() {
    return (
       <div class="App-header">
        <img src={leaves} className= "App-logo" alt="logo"></img>
        <div class="centered">
          <img src={me} alt="pic"></img>
          <div class="bordered">
            <img src={laurel} alt="border"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;