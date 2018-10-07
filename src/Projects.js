import React, { Component } from 'react';
import YVHS from './YVHS.jpg';
import p5 from './p5.png';
import Hoverbox from './Hoverbox.js'
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2 className="Proj-header">
           Projects
        </h2>
        <Hoverbox picture={YVHS} header= "Student Tracking Tool" details= "Creating a student tracking tool for teachers at Ygnacio Valley High School to effectively measure and monitor student data."/>
        <Hoverbox picture={p5} header= "Interactive Learning Tool" details= "Create online learning tool for the computer science concept of insertion sort that allows for user interaction."/>
      </div>
    );
  }
}

export default Projects;