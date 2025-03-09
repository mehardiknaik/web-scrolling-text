import { useRef, useState } from "react";
import Style from "./App.module.css";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

function App() {
  const ref = useRef<ScrollingType>(null);
  const [interval, setInterval] = useState(1500);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [show, setShow] = useState(true);
  const [loop, setLoop] = useState(true);

  return (
    <ScrollingTextProvider
    // options={{
    //   enterAnimation: "flipEnter",
    //   exitAnimation: "flipExit",
    // }}
    >
      <div className={Style.demo}>
        <div>Before</div>
        {show && (
          <ScrollingText
            ref={ref}
            options={{
              onStart: () => console.log("Start"),
              onStop: () => console.log("Stop"),
              onChange: (index) => console.log("Change", index),
              onReachEnd: () => console.log("End"),
            }}
          >
            <div className={Style.hello}>Hey</div>
            <div className={Style.how}>Welcome Back</div>
            <div className={Style.are}>Loren Ipsum</div>
            <div className={Style.you}>How Are You !</div>
            bye
          </ScrollingText>
        )}
        <div>After</div>
      </div>
    </ScrollingTextProvider>
  );
}

export default App;
