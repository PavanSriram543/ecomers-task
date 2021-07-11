import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 pt-2 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 footer pt-5">
            <a href="#/">
              <p
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "white",
                }}
                data-aos="slide-right"
              >
                company name
              </p>
            </a>
            <p data-aos="slide-right">
              Here you can use rows and
              <br />
              to organize your footer content.
              <br />
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipisicing elit.
              <br />
            </p>
          </div>
          <div className="col-xl-3 pt-5 hide-girl">
            <a href="#/">
              <span
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "white",
                }}
                data-aos="zoom-in-left"
              >
                products
              </span>
              <br />
            </a>
            <p style={{ marginTop: "3%" }} data-aos="slide-up">
              M D Bootstrap
            </p>
            <p style={{ marginTop: "-3%" }} data-aos="slide-up">
              M D Bootstrap
            </p>
            <p style={{ marginTop: "-3%" }} data-aos="slide-up">
              M D Bootstrap
            </p>
            <p style={{ marginTop: "-3%" }} data-aos="slide-up">
              M D Bootstrap
            </p>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 footer  pt-5">
            <a href="#/">
              <span
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "white",
                }}
                className="text-center"
                data-aos="zoom-in-left"
              >
                useful link
              </span>
              <br />
            </a>
            <p style={{ marginTop: "3%", marginLeft: "1%" }} data-aos="fade-up">
              your account
            </p>
            <p
              style={{ marginTop: "-3%", marginLeft: "1%" }}
              data-aos="fade-up"
            >
              your account
            </p>
            <p
              style={{ marginTop: "-3%", marginLeft: "1%" }}
              data-aos="fade-up"
            >
              your account
            </p>
            <p
              style={{ marginTop: "-3%", marginLeft: "1%" }}
              data-aos="fade-up"
            >
              your account
            </p>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12 footer pt-5 pb-3">
            <a href="#/">
              <p
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "white",
                }}
                data-aos="slide-left"
              >
                contact
              </p>
            </a>
            <p data-aos="fade-up">
              <i
                className="fa fa-home"
                aria-hidden="true"
                style={{ fontSize: 20 }}
              />
              &nbsp; New York, 10012,
            </p>
            <p data-aos="fade-up">
              <i className="fa fa-envelope" aria-hidden="true" />
              &nbsp; info@gmail.com
            </p>
            <p data-aos="fade-up">
              <i className="fa fa-phone" aria-hidden="true" />
              &nbsp; + 01 234 567 88
            </p>
            <p data-aos="fade-up">
              <i className="fa fa-print" aria-hidden="true" />
              &nbsp; + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <hr style={{ color: "white", width: "100%", border: "1px solid" }} />
      <div className="container mt-4 pb-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
            <p>
              <a className="text-light" href="#/">
                © 2020 Copyright:
              </a>
              <span style={{ fontWeight: 600 }}>
                <a href="#/" style={{ color: "white" }} />
              </span>
            </p>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 icon-head">
            <a href="#/">
              <span className="icons-2" style={{ color: "white" }}>
                <i className="fa fa-facebook" aria-hidden="true" />
              </span>
            </a>
            <a href="#/">
              <span className="icons-3" style={{ color: "white" }}>
                <i className="fa fa-twitter" aria-hidden="true" />
              </span>
            </a>
            <a href="#/">
              <span className="icons-1" style={{ color: "white" }}>
                <i className="fa fa-google-plus" aria-hidden="true" />
              </span>
            </a>
            <a href="#/">
              <span className="icons" style={{ color: "white" }}>
                <i className="fa fa-instagram" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
