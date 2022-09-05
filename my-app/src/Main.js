import React, {Component} from "react";
import ScrollPages from "./component/scroll_pages";
import Header from "./component/header/header";
import TailBar from "./component/tailBar/TailBar";
import Feature from "./component/feature/Feature";
import About from "./component/about/About";
import Gallery from "./component/gallery/Gallery";
import Footer from "./component/mission/Footer";
import ReactFluidAnimation from "@usertive/react-fluid-animation";

import "./css/style.css";

function Main() {
  const defaultConfig = {
    splatRadius: 0.005,
  };
  return (
    <section className="main">
      <ReactFluidAnimation config={defaultConfig} className="upperLevel" />
      <div className="underLevel">
        <Header />
        {/* <ScrollPages /> */}
        <Feature />
        <About />
        <Gallery />
        <Footer />
        <TailBar />
      </div>
    </section>
  );
}

export default Main;
