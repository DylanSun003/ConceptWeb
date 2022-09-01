import React, {Component} from "react";
import ScrollPages from "./component/scroll_pages";
import NavBar from "./component/navBar/NavBar";
import Header from "./component/header/header";
import TailBar from "./component/tailBar/TailBar";
import Feature from "./component/feature/Feature";
import About from "./component/about/About";
import Gallery from "./component/gallery/Gallery";
import Footer from "./component/mission/Footer";
import ReactFluidAnimation from "@usertive/react-fluid-animation";

import "./css/style.css";

function Main() {
  return (
    <section className="main">
      <ReactFluidAnimation className="upperLevel" />
      <div className="underLevel">
        <NavBar />
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
