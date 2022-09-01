import React, {useEffect, useState, Component, useRef} from "react";
import GalleryItem from "./GalleryItem";
import photos from "../feature/photos.js";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./Gallery.css";

function Gallery() {
  const [curImage, setCurImage] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".gallery-item-div");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: ref.current,
        scroll: ".main",
        pin: true,
        scrub: 0.5,
        // span: 1 / (sections.length - 1),
        end: () => `+=${ref.current.offsetWidth}`,
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{curImage}</span>
          <span className="divider" />
          <span>{photos.length}</span>
        </div>
        {photos.map((photoInfo) => {
          return (
            <GalleryItem
              src={photoInfo[0]}
              index={photoInfo[1]}
              undateCurImage={(index) => {
                setCurImage(index + 1);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
