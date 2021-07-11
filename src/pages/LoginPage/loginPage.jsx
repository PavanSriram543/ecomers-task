import React from "react";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className=" bg-contact">
      <div className="container">
        <div className="container form bg-white pt-5 mt-4 mb-3">
          {/*change after click on sign up*/}
          <p className="text-center login-heading hide-me">login</p>
          <div className="container hide-me">
            <div className="row">
              <div className="col mt-4 pl-5 pr-5">
                <p className="username">username</p>
                <div className="row mt-4">
                  <div className="col-2 text-center pt-1 pr-0">
                    <i className="fa fa-user-o" aria-hidden="true" id="user" />
                  </div>
                  <div className="col-10 pl-0">
                    <input
                      type="text"
                      placeholder="Type your username"
                      className="input-1"
                    />
                  </div>
                </div>
                <hr className="hr-1" />
                <div className="hide" />
              </div>
            </div>
            <div className="row">
              <div className="col mt-4 pl-5 pr-5">
                <p className="username">Password</p>
                <div className="row mt-4">
                  <div className="col-2 text-center pt-1 pr-0">
                    <i className="fa fa-lock" aria-hidden="true" id="lock" />
                  </div>
                  <div className="col-10 pl-0">
                    <input
                      type="password"
                      placeholder="Type your password"
                      className="input-2"
                    />
                  </div>
                </div>
                <hr className="hr-2" />
                <div className="hide-1" />
              </div>
            </div>
            <div className="row">
              <div className="col text-right pr-5">
                <a href="#">
                  <span className="forget-password">Forget password?</span>
                </a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col pl-5 pr-5">
                <a href="login-ecommerce.html">
                  <span className="btn btn-block text-white login-button">
                    login
                  </span>
                </a>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <span
                  style={{
                    textTransform: "capitalize",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgb(148, 141, 141)",
                  }}
                >
                  or sign up using
                </span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <span className="facebook-icon">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </span>
                <span className="twitter-icon">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </span>
                <span className="google-icon">
                  <i className="fa fa-google" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <span
                  style={{
                    textTransform: "capitalize",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgb(148, 141, 141)",
                  }}
                >
                  or sign up using
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
