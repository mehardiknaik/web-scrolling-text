import { useRef } from "react";
import Style from "./App.module.css";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

function App() {
  const ref = useRef<ScrollingType>(null);

  return (
    <ScrollingTextProvider
    // options={{
    //   enterAnimation: "flipEnter",
    //   exitAnimation: "flipExit",
    // }}
    >
      <div className={Style.demo}>
        <div>Before</div>

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
        <div>After</div>
      </div>
    </ScrollingTextProvider>
  );
}

export default App;
