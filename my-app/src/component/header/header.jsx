import React, {useState, useEffect} from "react";
import Fade from "react-reveal/Fade";

import imgMove from "../../img/metaverse.png";
import imgHeader from "../../img/liquid_shape.png";
import PreHeader from "./preHeader";
import useOnScreen from "../hooks/useOnScreen";
import TypeWriter from "../TypeWriter/TypeWriter";

import "./header.css";
import {useRef} from "react";

function Header() {
  let [width, setWidth] = useState(null);
  let [height, setHight] = useState(null);
  let [moveX, setX] = useState(null);
  let [moveY, setY] = useState(null);

  let nextHeader = useRef(null);
  let onScreen = useOnScreen(nextHeader, 0.1);

  useEffect(() => {
    window.addEventListener("resize", updateWidndowDimensions());
  }, []);

  const updateWidndowDimensions = () => {
    setHight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  const handleMouseMove = (e) => {
    setX((width / 2 - e.nativeEvent.clientX) * 0.1 + "px");
    setY((height / 2 - e.nativeEvent.clientY) * 0.1 + "px");
  };

  return (
    <section className="container header" ref={nextHeader}>
      <PreHeader nextPage={onScreen} />
      <div className="row intro">
        <Fade left>
          <div className="col col_left">
            <h1>
              RED<span style={{color: "red"}}>D</span> LABS
            </h1>
            <TypeWriter texts={["Playing with your NFTs.", "Making friends with your NFTs.", "Sharing with your NFTs."]} />
          </div>
        </Fade>
        <Fade right>
          <div className="col col_right">
            {/* <img src={imgHeader} alt="" className="rightImage" /> */}
            <img
              src={imgMove}
              alt=""
              onMouseMove={handleMouseMove}
              className="imgMove"
              style={{
                "-webit-transform": `translate(${moveX}, ${moveY}) `,
                "-moz-transform": `translate(${moveX}, ${moveY}) `,
                transform: `translate(${moveX}, ${moveY}) `,
              }}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Header;
