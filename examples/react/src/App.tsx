import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";
import style from "./App.module.css";
import animation from "web-scrolling-text/animation/rubberBand";

function App() {
  const ref = React.useRef<ScrollingType>(null);
  return (
    <div className={style.container}>
      <ScrollingText ref={ref} options={animation}>
        {["How", "Are", "Youc ds"]}
      </ScrollingText>
    </div>
  );
}

export default App;
