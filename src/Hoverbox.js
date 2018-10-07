import React, { Component } from 'react';
import './Hoverbox.css';

class Hoverbox extends Component {
  render() {
    return (
    <div class="container">
      
      <div className="Interior">
        <h2>
            {this.props.header}
        </h2>
        <p>
            {this.props.details}
        </p>
      </div>
      <img src= {this.props.picture} className="Exterior"/>
    </div>     
    );
  }
}

export default Hoverbox;