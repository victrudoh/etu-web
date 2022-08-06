import React from "react";
import { NavLink } from "react-router-dom";

// styles
import { Wrapper } from "./Navbar.Styles";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5 navbarCSS fixed-top">
          <div className="container">
            <div className="logo navbar-brand"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/user/wallet" className="nav-link">
                    Wallet
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/user/card" className="nav-link">
                    Card
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/user/profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link btn btn-info btn-outline-secondary br- text-white mx-3"
                  >
                    Create Account
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
