import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.achieversit.com/assets/images/AIT-white.jpg"
            alt="logo"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center pl"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="./images/profile-icon.png"
                  alt="avatar"
                  className="avatar"
                />
              </Link>
              <ul
                className="dropdown-menu text-center "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="pt-2 pb-2">
                  <Link className="dropdown-item p-0 fw-bold bold" to="/">
                    Help Center
                  </Link>
                </li>
                <li className="pt-2 pb-2">
                  <Link className="dropdown-item p-0 fw-bold bold" to="/">
                    Order History
                  </Link>
                </li>
                <li className="pt-2 pb-2">
                  <Link className="dropdown-item p-0 fw-bold bold" to="/">
                    Change Password
                  </Link>
                </li>
                <li className="pt-2 pb-2">
                  <Link className="dropdown-item p-0 fw-bold bold" to="/">
                    Update Profile
                  </Link>
                </li>
                <li className="pt-2 pb-2">
                  <Link className="dropdown-item p-0 fw-bold bold" to="/login">
                    Log In
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
