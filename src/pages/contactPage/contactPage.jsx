import React, { Component } from "react";
import "./contactPage.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" bg-contact">
        <div className="container">
          <div className="container form bg-white pt-5 mt-4 mb-3">
            <p className="text-center contact-heading">contact us</p>
            <div className="container">
              <div className="row pl-5 pt-3">
                <div className="col-12 pt-3">
                  <input
                    type="text"
                    placeholder="name"
                    style={{
                      width: "85%",
                      border: "transparent",
                      borderBottom: "2px solid black",
                      height: 40,
                    }}
                    className="name"
                  />
                  <div className="name-hide" />
                </div>
                <div className="col-12 pt-4">
                  <input
                    type="text"
                    placeholder="mobile no."
                    style={{
                      width: "85%",
                      border: "transparent",
                      borderBottom: "2px solid black",
                      height: 40,
                    }}
                    className="mobile"
                  />
                  <div className="mobile-hide" />
                </div>
                <div className="col-12 pt-4">
                  <input
                    type="text"
                    placeholder="email id"
                    style={{
                      width: "85%",
                      border: "transparent",
                      borderBottom: "2px solid black",
                      height: 40,
                    }}
                    className="email"
                  />
                  <div className="email-hide" />
                </div>
                <div className="col-12 pt-5">
                  <textarea
                    rows={5}
                    placeholder="message"
                    style={{ width: "85%" }}
                    className="message"
                    defaultValue={""}
                  />
                  <div className="hide-message" />
                </div>
                <div className="col-12 pt-5">
                  <a href="j">
                    <span
                      className="btn text-white send-button"
                      style={{ width: "85%" }}
                    >
                      send
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
