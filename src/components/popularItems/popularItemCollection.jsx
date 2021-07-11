import React, { Component } from "react";
import PopularItem from "./popularItem";
import { Link } from "react-router-dom";

import "./popularItems.css";

class PopularItemCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularitems: [
        {
          img: "./images/popularImages/girl.jpg",
          name: "AFORDABLE & TRADESIONAL DRESS",
          price: "$101.00",
          id: 1,
        },
        {
          img: "./images/popularImages/kids.jpg",
          name: "TODDLER CHILDREN'S DRESS",
          price: "$203.00",
          id: 2,
        },
        {
          img: "./images/popularImages/blazers.jpg",
          name: "MEN'S BLACK SWEATSHIRT",
          price: "$60.00",
          id: 3,
        },
        {
          img: "./images/popularImages/boys-kids.jpg",
          name: "BOYS FLOWER PRINT SHIRT",
          price: "$320.00",
          id: 4,
        },
        {
          img: "./images/popularImages/boys-kids-1.jpg",
          name: "FORMAL TOXEDO DRESS SUITS",
          price: "$117.00",
          id: 5,
        },
        {
          img: "./images/popularImages/girl (2).jpg",
          name: "GIRLS FLOWER PRINT SKIRT",
          price: "$400.00",
          id: 6,
        },
        {
          img: "./images/popularImages/men.jpg",
          name: "PLAIN PINK COTTON SAREE",
          price: "$400.00",
          id: 7,
        },
        {
          img: "./images/popularImages/men-1.jpg",
          name: "ACCESSORIES & TRADESIONAL DRESS",
          price: "$117.00",
          id: 8,
        },
      ],
    };
  }
  render() {
    return (
      <div className="container-fluid pt-4">
        <div className="container">
          <div className="text-center pt-4 pb-4">
            {" "}
            <h1>POPULAR</h1>
          </div>

          <div className="row text-center">
            {this.state.popularitems.map(({ id, ...otherProps }) => (
              <PopularItem key={id} {...otherProps} />
            ))}
          </div>
          <div className="row mb-1 pb-3">
            <div className="col-12 pb-5 text-center ">
              <Link className="text-Primary" to="/">
                <span className="text" data-aos="zoom-in">
                  see more
                </span>
                <span className="pl">
                  <i
                    className="fa fa-arrow-right icon"
                    aria-hidden="true"
                    data-aos="zoom-in"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularItemCollection;
