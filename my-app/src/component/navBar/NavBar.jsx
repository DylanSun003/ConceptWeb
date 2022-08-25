import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import Fade from "react-reveal/Fade";
import logo from "../../img/logo.png";

const NavBar = (props) => {
  return (
    <Fade top>
      <nav className="navbarList">
        <NavLink className="nav-item" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <div className="navbar-Item">
          <NavLink className="nav-link" to="/about-us">
            About us
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/sign-up">
            <button type="button" className="btn btn-primary">
              Sign Up/Log In
            </button>
          </NavLink>
        </div>
      </nav>
    </Fade>
  );
};

export default NavBar;
