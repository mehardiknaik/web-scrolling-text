import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";
import style from "./App.module.css";
import animation from "web-scrolling-text/animation/swing";
import ReactComponent from "./ReactComponent";
import ElementComponent from "./ElementComponent";

function App() {
  return (
    <div className={style.container}>
      <ReactComponent />
      <ElementComponent />
    </div>
  );
}

export default App;
