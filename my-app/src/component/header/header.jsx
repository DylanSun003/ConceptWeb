import React, {useState, useEffect} from "react";
import Fade from "react-reveal/Fade";

import "./header.css";

import imgMove from "../../img/metaverse.png";
import imgHeader from "../../img/liquid_shape.png";
import videoHeader from "../../img/marketing.mp4";
import NavBar from "../navBar/NavBar";

function Header() {
  let [width, setWidth] = useState(null);
  let [height, setHight] = useState(null);
  let [moveX, setX] = useState(null);
  let [moveY, setY] = useState(null);

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
    <div className="container header">
      <NavBar />
      <div className="row intro">
        <video src={videoHeader} autoPlay playsInline muted loop></video>
        <Fade left>
          <div className="col col_left">
            <h4>This is RLab</h4>
            <h2>
              The future of Web3, The new NFT, presented by <span>RLab</span>.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aut. Adipisci fuga rerum sint sequi praesentium mollitia! Quia
              impedit numquam doloremque quae dolor incidunt illum. Molestias nostrum molestiae aliquam eos..
            </p>
          </div>
        </Fade>
        {/* <Fade right> */}
        <div className="col col_right">
          <img src={imgHeader} alt="" className="rightImage" />
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
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default Header;
