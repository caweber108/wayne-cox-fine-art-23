import React, { Component } from "react";
import "./../App.scss";
import "./css/works.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        Home
        <img
          className="home-img"
          src="./desert.jpg"
          alt="water based oil painting"
        ></img>
      </div>
    );
  }
}

export default Home;
