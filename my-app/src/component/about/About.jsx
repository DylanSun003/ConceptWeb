import React from "react";
import {useRef, useState, useEffect} from "react";
import Fade from "react-reveal/Fade";

import "./About.css";

function About() {
  const content = useRef();
  const divAbout = useRef();
  const stickyDiv = useRef();

  const handleScroll = (e) => {
    let scrolled = document.documentElement.scrollTop;
    if (scrolled >= divAbout.current.offsetTop) {
      divAbout.current.style.overFlow = "scroll";
      let bodyScrollPercentage = (scrolled - divAbout.current.offsetTop) / divAbout.current.clientHeight;
      content.current.style.setProperty("--percentage", `${bodyScrollPercentage * 100}%`);
    } else {
      divAbout.current.style.overFlow = "none";
      content.current.style.setProperty("--percentage", `0%`);
    }
    let prefix = "--percentage:";
    let str = content.current.style.cssText.slice(prefix.length);
    str = str.slice(0, str.length - 3);

    if (parseInt(str) <= 5) {
      stickyDiv.current.style.position = "relative";
      stickyDiv.current.style.zIndex = 0;
      content.current.style.zIndex = 0;
    } else {
      stickyDiv.current.style.position = "sticky";
      stickyDiv.current.style.zIndex = 1;
      content.current.style.zIndex = 1;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <section className="about-section" ref={divAbout}>
      <Fade>
        <h3 className="section-header">
          MIS<span style={{color: "red"}}>S</span>ION
        </h3>
      </Fade>
      <div className="sticky" ref={stickyDiv}>
        <p ref={content}>
          RedD Labs is committed to exploring a richer interactive NFT experience. Through us, everyone can create a new world by setting the methods
          of their metaverses. We try to provide the tool that everyone has the right to design the dream.
        </p>
      </div>
    </section>
  );
}

export default About;
