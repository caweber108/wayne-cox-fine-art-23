import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./../App.scss";
import "./css/works.scss";

class CarouselWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesCount: 2
    };
  }

  componentDidMount() {
    this.updateImagesCount(this.props.path);
  }

  render() {
    return (
      <Carousel pauseOnHover={true} indicators={false}>
        {this.createCarouselItems()}
      </Carousel>
    );
  } //end render

  /*React deals with things a bit different than markup as strings etc. so use array to concat stuff and don't
   worry so much about  quotes as seems to handle it internally */
  createCarouselItems() {
    const { path } = this.props;
    //console.log("path: ", path);
    //console.log("imagesCount ", this.state.imagesCount);

    var carouselMarkup = [];
    let imageSrc;
    for (let i = 1; i <= this.state.imagesCount; i++) {
      imageSrc = "./" + path + "/" + i + ".jpg";
      carouselMarkup.push(
        <Carousel.Item key={i}>
          <img
            className="d-block center works-img"
            src={imageSrc}
            alt="slide"
          />
        </Carousel.Item>
      );
    } //end for
    return carouselMarkup;
  } //end createCarousel

  /*This is very hacky right now as these are hard-coded values - TODO - read files from
    actual system to get count and names so don't have to use the 1,2,3 name*/
  updateImagesCount(path) {
    let _imagesCount = 0;
    //Todo:switch to switch
    if (path === "architecture") {
      _imagesCount = 13;
    } else if (path === "landscape") {
      _imagesCount = 5;
    } else if (path === "floral") {
      _imagesCount = 2;
    } else if (path === "figurative") {
      _imagesCount = 2;
    } else if (path === "abstract") {
      _imagesCount = 2;
    }
    this.setState({ imagesCount: _imagesCount });
  } //end function
}

export default CarouselWrapper;
