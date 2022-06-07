import React from "react";
import logo from "../image/akeru.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed-top bg-white nav-container">
       <nav className="navbar navbar-expand-lg navbar-light bg-white main_width fixed-top sm_nav_width">
        <div className="container-fluid nav_settings">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo position-relative" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m_auto">
              <Link
                to="/how-it-works"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                How it works
              </Link>

              <Link
                to="/route"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                Route
              </Link>

              <Link
                to="/partner"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small"
              >
                Partner
              </Link>
            </ul>
            <div className="d-flex nav_flex_direction">
              <Link
                to="/signin"
                className="nav_margin link-dark text-decoration-none fw-bold fs-small nav_link_padding"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="link_border_style nav_margin register_link link-dark sm-margin_nav text-decoration-none fw-bold fs-small m-0"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
