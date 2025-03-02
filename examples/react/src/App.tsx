import { useRef, useState } from "react";
import Style from "./App.module.css";
import ScrollingText from "web-scrolling-text/react";
import Scrolling from "web-scrolling-text";

function App() {
  const ref = useRef<Scrolling>(null);
  const [interval, setInterval] = useState(3000);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [show, setShow] = useState(true);

  return (
    <div className={Style.container}>
      <div>Before</div>
      {show && (
        <ScrollingText
          ref={ref}
          options={{
            interval: interval,
            animationDuration: animationDuration,
            enterAnimation:'fadein',
            exitAnimation:'fadeout'
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
      <button onClick={() => ref.current?.start()}>Start</button>
      <button onClick={() => ref.current?.pause()}>pause</button>
      <button onClick={() => ref.current?.stop()}>Stop</button>
      <input
        type="range"
        min="1000"
        step={1000}
        max="10000"
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value))}
      />
      <div>{interval / 1000}</div>
      <div>
        <input
          type="range"
          min="100"
          step={100}
          max="2000"
          value={animationDuration}
          onChange={(e) => setAnimationDuration(parseInt(e.target.value))}
        />
        <div>{animationDuration / 1000}</div>
      </div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
