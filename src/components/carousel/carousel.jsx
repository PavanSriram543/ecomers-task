import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item height  active">
          <div className="container pt-4">
            <div className="row mt-3 pt-4">
              <div className="col-12 text-center pt-4">
                <Link to="/">
                  <span className="box">
                    {/* <img  src="./images/carousel-imgs/sale-1.png" height="320px" alt="carousel-image" /> */}
                    <img
                      src="./images/carousel-imgs/sale-box.jpg"
                      height="320px"
                      alt="carousel-img"
                    />
                  </span>
                </Link>{" "}
                <Link to="/">
                  <img
                    src="./images/carousel-imgs/sale-1.png"
                    height="300px"
                    alt="carousel-img"
                  />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item height">
          <div className="container pt-4">
            <div className="row pb-4 pt-4">
              <div className="col-12 text-center pt-4">
                <Link to="/">
                  <span className="box">
                    <img
                      src="./images/carousel-imgs/ballon.jpg"
                      alt="carousel-img"
                      height="350px"
                    />
                  </span>
                </Link>{" "}
                <Link to="/">
                  <img
                    className="lady-img"
                    src="./images/carousel-imgs/background-image.jpg"
                    height="450px"
                    alt="carousel-img"
                  />
                </Link>{" "}
                <Link to="/">
                  <span className="box">
                    <img
                      src="./images/carousel-imgs/sale-tag.jpg"
                      alt="carousel-img"
                      height="430px"
                    />
                  </span>
                </Link>{" "}
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="carousel-item height">
          <div className="container pt-4">
            <div className="row mt-3 pt-4">
              <div className="col-12 text-center pt-4">
                <Link to="/">
                  <span className="box">
                    <img
                      className="padding"
                      src="./images/carousel-imgs/background-image-1.jpg"
                      height="350px"
                      alt="carousel-img"
                    />
                  </span>
                </Link>{" "}
                <Link to="/">
                  <img
                    className="padding-1"
                    src="./images/carousel-imgs/sale.jpg"
                    height="350px"
                    alt="carousel-img"
                  />
                </Link>{" "}
                <Link to="/">
                  <span className="box">
                    <img
                      src="./images/carousel-imgs/background-image-2.jpg"
                      alt="carousel-img"
                      height="320px"
                    />
                  </span>
                </Link>{" "}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
