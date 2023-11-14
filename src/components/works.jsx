import React, { Component } from "react";
import CarouselWrapper from "./carouselWrapper";
import "./../App.scss";
import "./css/works.scss";

class Works extends Component {
  state = {
    index: 0,
    path: ""
  };

  handleCarousel = e => {
    let id = e.target.id;
     console.log("selectedId path: ", e.target.id);
    if (id === "close") {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: 1, path: id });
    }
  };

  getCarouselClasses() {
    let classes = "full-screen-container ";
    classes += this.state.index === 0 ? "none" : "display";
    return classes;
  }

  render() {
    const index = this.state.index;
    /*TODO-put in own component rather than all the duplication */
    if (index === 0)
      return (
        <div className="outer-container">
          <div className="title-container">Portfolio of works</div>
          <div className="genres-container">
            <div className="img-container">
              {" "}
              <img
                className="works-img"
                id="landscape"
                src="./landscapeThumb.JPG"
                width="396"
                height="300"
                alt="second slide"
                onClick={this.handleCarousel}
              />
              <h2
                id="landscape"
                className="img-caption"
                onClick={this.handleCarousel}
              >
                LANDSCAPES
              </h2>
            </div>
            <div className="img-container">
              {" "}
              <img
                className="works-img"
                id="abstract"
                src="./abstractThumb.JPG"
                width="300"
                height="400"
                alt="second slide"
                onClick={this.handleCarousel}
              />
              <h2 className="img-caption" onClick={this.handleCarousel}>
                Abstracts
              </h2>
            </div>
            <div className="img-container">
              {" "}
              <img
                className="works-img"
                id="architecture"
                src="./architect-thumb.JPG"
                width="300"
                height="400"
                alt="second slide"
                onClick={this.handleCarousel}
              />
              <h2 className="img-caption" onClick={this.handleCarousel}>
                Architecture
              </h2>
            </div>
            <div className="img-container" onClick={this.handleCarousel}>
              {" "}
              <img
                id="floral"
                className="works-img"
                src="./florals-thumb.JPG"
                width="350"
                height="350"
                alt="second slide"
                onClick={this.handleCarousel}
              />
              <h2 className="img-caption">Florals</h2>
            </div>
            <div className="img-container" onClick={this.handleCarousel}>
              {" "}
              <img
                id="figurative"
                className="works-img"
                src="./figurative-thumb.JPG"
                width="400"
                height="300"
                alt="second slide"
                onClick={this.handleCarousel}
              />
              <h2 className="img-caption">Figurative</h2>
            </div>
          </div>
        </div>
      );

    //so else
    return (
      <div>
        <div className={this.getCarouselClasses()}>
          <div className="btn-wrapper">
            <button
              className="x-close"
              id="close"
              onClick={this.handleCarousel}
            >
              X
            </button>
          </div>
          <CarouselWrapper path={this.state.path}></CarouselWrapper>
        </div>
      </div>
    );
  }
}

export default Works;
