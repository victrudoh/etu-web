import React from "react";

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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Wallet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Card
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-info btn-outline-secondary br- text-white mx-3"
                    href="#"
                  >
                    Create Account
                  </a>
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
