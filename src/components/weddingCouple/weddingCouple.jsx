import React from "react";
import "./weddingCouple.css";

const WeddingCouple = () => {
  return (
    <div className="container-fluid couple-bg pt-5 pb-5">
      <div className="container" height="200px">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 text-center">
            <a href="ecommerce-price-men.html">
              <img
                src="./images/wedding-couple.jpg"
                height="230px"
                className="pl-5"
                alt="weddingCouple"
              />
            </a>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12 pt-4 text-center">
            <span style={{ fontWeight: 700, fontSize: 20 }} data-aos="zoom-in">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consequat quam vel diam iaculis consectetur. Praesent
              ac arcu sem. Nulla consectetur magna ac libero rutrum malesuada.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per
            </span>
            <br />
            <br />
            <a href="ecommerce-price-men.html">
              <span
                style={{
                  fontSize: 20,
                  color: "rgb(180, 69, 69)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                }}
                data-aos="zoom-in"
              >
                choose your wedding dress
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCouple;
