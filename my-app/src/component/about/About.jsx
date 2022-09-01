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
        <h6 className="section-header">What We know RedD Lab</h6>
      </Fade>
      <div className="sticky" ref={stickyDiv}>
        <p ref={content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis, fugiat laboriosam alias dolores repellendus. Autem totam porro
          aut recusandae, eius, eos quo ea velit perferendis atque tempore odio eum. Animi dolorum quidem hic rem architecto, ducimus omnis eaque quae
          excepturi facere, neque odio consequuntur maxime cumque! Nulla, suscipit fuga.
        </p>
      </div>
    </section>
  );
}

export default About;
