import React from "react";
import { Link } from "react-router-dom";

const PopularItem = ({ img, name, price }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
      <div
        className="container pl-0 overflow-hidden"
        height="250px"
        width="250px"
      >
        <Link to="/">
          <img src={img} className="img-men" alt="img" />
          <br />
        </Link>
        <Link to="/">
          <span className="image-lable" data-aos="fade-up">
            {name}
            <br />
            {price}{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PopularItem;
