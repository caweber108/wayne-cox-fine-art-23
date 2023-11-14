import React, { Component } from "react";
import "./../App.scss";
import "./css/works.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="outer-container">
        <div className="title-container">About the artist</div>
        <div>
          <img
            className="home-img"
            src="./wayne.jpg"
            alt="water based oil painting"
          ></img>
        </div>
        <p className="about-desc">Wayne Cox is a very stable genius.</p>
      </div>
    );
  }
}

export default About;
