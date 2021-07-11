import React, { Component } from "react";

class MultiCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="multi-carousel">
        <div className="multi-carousel-inner">
          <div className="multi-carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.jpg"
              alt="Gallery image 1"
              className="w-100"
            />
          </div>
          <div className="multi-carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
              alt="Gallery image 2"
              className="w-100"
            />
          </div>
          <div className="multi-carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/3.jpg"
              alt="Gallery image 3"
              className="w-100"
            />
          </div>
          <div className="multi-carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/4.jpg"
              alt="Gallery image 4"
              className="w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          tabIndex={0}
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          tabIndex={0}
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default MultiCarousel;
