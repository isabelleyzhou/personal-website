import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  render() {
    return (
      <div>
        <h2 className= "Topbar">
            <a href="www.linkedin.com/in/isabelle-zhou">LinkedIn</a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/isabelleyzhou">GitHub</a>
        </h2>
      </div>
    );
  }
}

export default Link;