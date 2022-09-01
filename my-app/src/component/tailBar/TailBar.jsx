import React from "react";
import {NavLink} from "react-router-dom";
import github from "../../img/utils/github.png";
import linkin from "../../img/utils/linkin.png";
import facebook from "../../img/utils/facebook.png";
import top from "../../img/utils/halfpic.png";
import "./TailBar.css";

const TailBar = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <section className="tail">
      <img src={top} alt="" className="top" onClick={scrollToTop} />
      <div className="tail-info">
        <NavLink className="nav-tail-item" to="/">
          © 2022 RLab
        </NavLink>
        <div className="logo-block">
          <NavLink className="nav-tail-item" to={{pathname: "/"}} target="_blank">
            <img src={github} alt="githublogo" className="github-logo" />
          </NavLink>
          <NavLink className="nav-tail-item" to={{pathname: "/"}} target="_blank">
            <img src={linkin} alt="linkin" className="github-logo" />
          </NavLink>
          <NavLink className="nav-tail-item" to={{pathname: "/"}} target="_blank">
            <img src={facebook} alt="linkin" className="github-logo" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TailBar;
