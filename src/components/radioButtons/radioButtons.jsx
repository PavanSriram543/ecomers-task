import React from "react";

const RadioButtons = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
      <div className="container large-left-sider">
        <div className="row">
          <div className="col-12 px-0 pt-5 pb-4 text-center pl-0">
            <input className="search-box" type="text" placeholder="Search.." />
            <span>
              <button className="search-button">
                <i className="fa fa-search" id="search-icon" />
              </button>
            </span>
          </div>
        </div>
        <div className="row pl-3">
          <div className="col-12 pt-3">
            <p
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              price
            </p>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp;₹100-200{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp;₹200-300
                </label>
              </div>
            </div>{" "}
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp;₹300-400{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp;₹400-500
                </label>
              </div>
            </div>{" "}
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp;₹500-600{" "}
                </label>
              </div>
            </div>
          </div>
          <div className=" col-12 pt-5">
            <p
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              colour
            </p>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;blue
              </label>
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;green
              </label>
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;yellow
              </label>
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;black
              </label>
            </div>
          </div>
          <div className=" col-12 pb-5 pt-5">
            <p
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              brand
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;LOUIS VUITTON
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;GUCCI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {" "}
                &nbsp; HERMES
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp;PRADA
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;
