import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";
import style from "./App.module.css";
import fade from "web-scrolling-text/animation/fade";

function App() {
  const ref = React.useRef<ScrollingType>(null);
  return (
    <div className={style.container}>
      <ScrollingText ref={ref} options={fade}>
        {["How", "Are", "You"]}
      </ScrollingText>
    </div>
  );
}

export default App;
