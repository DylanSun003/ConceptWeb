import React, {useState, useRef, useEffect} from "react";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";

import "./Gallery.css";

function GalleryItem({src, index, undateCurImage}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    console.log("div:" + onScreen);
    if (onScreen) {
      undateCurImage(index);
    }
  }, [onScreen, index]);

  return (
    <div className={cn("gallery-item-div", {"is-inview": onScreen})} ref={ref}>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-item-name">Abc AADDC</h1>
          <h6 className="gallery-item-subtitle">Project ABCDlkjooijoqwqioi</h6>
        </div>
        <div className="gallery-item-image" style={{backgroundImage: `url(${src})`}}></div>
      </div>
    </div>
  );
}

export default GalleryItem;
