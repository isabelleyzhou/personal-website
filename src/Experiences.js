import React, { Component } from 'react';
import './Experiences.css';
import Unitbox from './Unitbox.js'
import JHU from './JHU.png';
import NIH from './NIH.png';
import CB from './CB.png';

function foo(description){
    return description + "(this isn't true)";
}
class Experiences extends Component {
  render() {
    return (
      <div className= "Exp-container">
        <h2 className="Exp-header">
           Experiences
        </h2>
        <Unitbox logo={JHU} description="Intern-Working in the Johns Hopkins University Physics Department and sponsored by Fermilab's Quarkent program, I conducted independent research in particle physics and cosmology using particle muon detectors, radio telescopes, and the resources from the nearby Space Telescope Science Institute. My independent project analyzed the k-z relation in characterizing radio galaxy evolution."/>
        <Unitbox logo={NIH} description="Intern- At the National Institute of Allergens and Infectious Diseases, I conducted research for the development of respiratory syncytial virus (RSV) vaccines and contributed to the publication of 'Genetic stability of genome-scale deoptimized RNA virus vaccine candidates under selective pressure."/>
        <Unitbox logo={CB} description="Software Developer- Learning new languages (Javascript, CSS, React, etc.)and full-stack web development to build interactive websites and products and develop skills in front-end development."/>
      </div>
    );
  }
}

export default Experiences;