import React, {Component} from "react";
import "./Feature.css";
import photosImport from "./photos";

function Feature() {
  const [m1, m2, m3, m4] = photosImport;
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-header">
        <h3>The ProdcutX</h3>
      </div>
      <div className="featured-grid">
        <div className="featured-row-layout">
          <h6>HelloWorld</h6>
          <img src={m1[0]} alt="" data-scroll data-scroll-repeat />
        </div>
        <div className="featured-column-layout">
          <h6>Lily</h6>
          <img src={m3[0]} alt="" data-scroll data-scroll-repeat />
        </div>
      </div>
    </section>
  );
}

export default Feature;
