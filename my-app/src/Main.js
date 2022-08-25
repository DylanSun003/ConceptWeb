import React, {Component} from "react";
import ScrollPages from "./component/scroll_pages";
import Header from "./component/header/header";
import TailBar from "./component/tailBar/TailBar";

import "./css/style.css";

function Main() {
  return (
    <div>
      <Header />
      <ScrollPages />
      <TailBar />
    </div>
  );
}

export default Main;
