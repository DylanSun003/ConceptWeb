import React, {useRef} from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import "./NavBar.css";
import Fade from "react-reveal/Fade";
import logo from "../../img/logo.png";
import useOnScreen from "../hooks/useOnScreen";
import {useEffect} from "react";
import cn from "classnames";
import {useState} from "react";

const NavBar = (props) => {
  return (
    <nav className={cn("navbarList", {"is-at-top": !props.onBottom}, {"is-out": props.nextPage})}>
      <NavLink className="nav-item" to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="navbar-Item">
        <Link className="nav-link" to="featured-section">
          Feature
        </Link>
        <Link className="nav-link" to="about-section">
          About us
        </Link>
        <Link className="nav-link" to="footer">
          Our Mission
        </Link>
        {/* <NavLink className="nav-link" to="/sign-up">
            <button type="button" className="btn btn-primary">
              Sign Up/Log In
            </button>
          </NavLink> */}
      </div>
    </nav>
  );
};

export default NavBar;
