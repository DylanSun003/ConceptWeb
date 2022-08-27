import React, {useState} from "react";
import "./Gallery.css";

function GalleryItem({src, index, undateCurImage}) {
  return (
    <div className="gallery-item-div">
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
