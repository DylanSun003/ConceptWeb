import videoHeader from "../../img/video.mp4";
import React, {useState, useEffect, useRef} from "react";
import Fade from "react-reveal/Fade";
import NavBar from "../navBar/NavBar";
import useOnScreen from "../hooks/useOnScreen";

import cn from "classnames";

import "./header.css";

function PreHeader(props) {
  const video = useRef(null);
  const onScreen = useOnScreen(video, 0.1);
  let transform = "";
  if (!props.nextPage) {
    transform = "translateY(-60px)";
  }

  return (
    <Fade>
      <div className={cn("pre-header", {out: !props.nextPage})}>
        <video src={videoHeader} autoPlay playsInline muted loop ref={video}></video>
        {/* <Fade bottom> */}
        {/* <div style={{position: "relative", zIndex: 2, bottom: "5px"}}> */}
        <NavBar onBottom={onScreen} nextPage={!props.nextPage} />
        {/* </div> */}
        {/* </Fade> */}
      </div>
    </Fade>
  );
}

export default PreHeader;
