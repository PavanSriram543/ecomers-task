import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenDress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="container pt-3 pb-3">
          <div className="row">
            <div className="col-sm-12 text-center pb-4 pt-4">
              <Link>
                <span className="h3">Men's Dress</span>
              </Link>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-xl-5 col-lg-5 text-center pt-5 hide-popular">
              <Link>
                <img
                  src="./images/menDress/mens-dress.jpg"
                  height="400px"
                  data-aos="fade-up"
                />
                <br />
              </Link>
              <Link>
                <span className="image-lable" data-aos="zoom-in">
                  accessories &amp; tradesional dress
                  <br />
                  $117.00
                </span>
              </Link>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-3">
                  <Link>
                    <img
                      src="./images/menDress/mens-dress-1.jpg"
                      height="200px"
                      data-aos="fade-up"
                    />
                    <br />
                  </Link>
                  <Link>
                    <span className="image-lable" data-aos="zoom-in">
                      accessories &amp; tradesional dress
                      <br />
                      $117.00
                    </span>
                  </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-3">
                  <Link>
                    <img
                      src="./images/menDress/mens-dress-2.jpg"
                      height="200px"
                      data-aos="fade-up"
                    />
                    <br />
                  </Link>
                  <Link>
                    <span className="image-lable" data-aos="zoom-in">
                      accessories &amp; tradesional dress
                      <br />
                      $117.00
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-3">
                  <Link>
                    <img
                      src="./images/menDress/mens-dress-3.jpg"
                      height="200px"
                      data-aos="fade-up"
                    />
                    <br />
                  </Link>
                  <Link>
                    <span className="image-lable" data-aos="zoom-in">
                      accessories &amp; tradesional dress
                      <br />
                      $117.00
                    </span>
                  </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-3">
                  <Link>
                    <img
                      src="./images/menDress/mens-dress-4.jpg"
                      height="200px"
                      data-aos="fade-up"
                    />
                    <br />
                  </Link>
                  <Link>
                    <span className="image-lable" data-aos="zoom-in">
                      accessories &amp; tradesional dress
                      <br />
                      $117.00
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container pr-5 text-center mt-2 pb-3">
            <div className="row pt-5">
              <div className="col">
                <Link>
                  <span
                    style={{
                      border: "3px solid rgb(180, 69, 69)",
                      borderRadius: 10,
                      padding: "1% 2%",
                      backgroundColor: "rgb(177, 84, 84)",
                    }}
                    className="ml-4"
                    data-aos="zoom-in"
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: "white",
                        textTransform: "uppercase",
                      }}
                    >
                      more
                    </span>
                    <span className="pl-3 text-white">
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenDress;
