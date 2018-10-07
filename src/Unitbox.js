import React, { Component } from 'react';
import './Unitbox.css';

class Unitbox extends Component {
  render() {
    return (
    <div className= "Unitbox-container">
      <div>
        <img src= {this.props.logo} className="Company-logo"/>
      </div>
      <p className="Content">
            {
              this.props.description
            }
      </p>
    </div>     
    );
  }
}

export default Unitbox;