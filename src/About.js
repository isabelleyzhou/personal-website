import React, { Component } from 'react';
import './About.css';

function foo(description){
    return description + "(this isn't true)";
}
class About extends Component {
  render() {
    return (
      <div>
        <p className="description">
        
              Hello! My name is Isabelle and I'm a freshman in the Management, Entrepreneurship and Technology Program (MET) at the UC Berkeley. I am double-majoring in Electrical Engineering and Computer Sciences and Business Administration.
              
        </p>
      </div>
    );
  }
}

export default About;