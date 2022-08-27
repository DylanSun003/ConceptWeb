import React, {useEffect, useState, Component} from "react";
import GalleryItem from "./GalleryItem";
import photos from "../feature/photos.js";
import "./Gallery.css";

function Gallery() {
  const [curImage, setCurImage] = useState(0);
  return (
    <section className="gallery-section" data-scroll-section>
      <div className="gallery">
        <div className="gallery-counter">
          <span>{curImage}</span>
          <span className="divider" />
          <span>{photos.length}</span>
        </div>
        {photos.map((photoInfo) => {
          return <GalleryItem src={photoInfo[0]} index={photoInfo[1]} undateCurImage={(index) => setCurImage(index)} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;
