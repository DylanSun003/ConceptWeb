import React, {Component, useEffect, useRef} from "react";
import "./Feature.css";
import photosImport from "./photos";
import useOnScreen from "../hooks/useOnScreen";
import Fade from "react-reveal/Fade";

import cn from "classnames";

function Feature() {
  const lastH6Ref = useRef(null);
  const onScreen = useOnScreen(lastH6Ref, 0.4);

  const [m1, m2, m3, m4] = photosImport;
  return (
    <section className="featured-section">
      <Fade>
        <div className="featured-header">
          <h3>
            PRO<span style={{color: "red"}}>D</span>UCT
          </h3>
        </div>
      </Fade>
      <div className="featured-grid">
        <div className={cn("featured-row-layout", {"is-inview": onScreen})}>
          <h6 className={cn({"is-inview": onScreen})}>
            TamagoX, as the first product, aims to strengthen the connection between users and NFTs by social gaming. It is to provide more applicable
            possibilities for NFTs, connecting various metaverses with simple interactive features as a social gaming network.
          </h6>
          {/* <img src={m1[0]} /> */}
        </div>
        <div className={cn("featured-column-layout", {"is-inview": onScreen})}>
          <h6 className={cn({"is-inview": onScreen})} ref={lastH6Ref}>
            Lily
          </h6>
          <img src={m3[0]} />
        </div>
      </div>
    </section>
  );
}

export default Feature;
