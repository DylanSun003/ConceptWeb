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
          <NavLink className="nav-link" to="/dao">
            DAO
          </NavLink>
          <NavLink className="nav-link" to="/faq">
            FAQ
          </NavLink>
        </div>
      </nav>
    </Fade>
  );
};

export default NavBar;
