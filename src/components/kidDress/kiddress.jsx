import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./kiddress.css";

class KidDress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          img: "./images/kidDress/kids.jpg",
          id: 1,
        },
        {
          img: "./images/kidDress/kids-dress.jpg",
          id: 2,
        },
        {
          img: "./images/kidDress/kids-dress-1.jpg",
          id: 3,
        },
        {
          img: "./images/kidDress/kids-dress-2.jpg",
          id: 4,
        },
      ],
    };
  }
  render() {
    return (
      <div className="container-fluid bg-img pt-5 pb-3 px-0" id="parallax2">
        <div className="container" height="200px">
          <div className="row pt-1">
            {this.state.images.map(({ img, id }) => (
              <div
                className="col-xl-3 col-lg-3  col-md-4 col-sm-6 col-12 pb-3 text-center "
                key={id}
              >
                <Link>
                  <img
                    src={img}
                    height="200px"
                    style={{ borderRadius: 20 }}
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
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col pt-4 pb-5 text-center">
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
                <span className="pl-3" style={{ color: "white" }}>
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default KidDress;
