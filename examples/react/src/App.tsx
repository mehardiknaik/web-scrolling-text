import { useRef, useState } from "react";
import Style from "./App.module.css";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";
import Search from "./components/Search/Search";

function App() {
  const ref = useRef<ScrollingType>(null);
  const [interval, setInterval] = useState(1500);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [show, setShow] = useState(true);
  const [loop, setLoop] = useState(true);

  return (
    <ScrollingTextProvider
      options={{
        enterAnimation: "flipEnter",
        exitAnimation: "flipExit",
      }}
    >
      <div>
        <div className={Style.container}>
          <div className={Style.demo}>
            <div>Before</div>
            {show && (
              <ScrollingText
                ref={ref}
                options={{
                  interval: interval,
                  animationDuration: animationDuration,
                  loop: loop,
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
          <div className={Style.controls}>
            <button onClick={() => ref.current?.start()}>Start</button>
            <button onClick={() => ref.current?.pause()}>pause</button>
            <button onClick={() => ref.current?.stop()}>Stop</button>
            <label htmlFor="interval">Interval</label>
            <input
              id="interval"
              type="range"
              min="1000"
              step={1500}
              max="10000"
              value={interval}
              onChange={(e) => setInterval(parseInt(e.target.value))}
            />
            <div>{interval / 1000}s</div>
            <label htmlFor="duration">Animation Duration</label>
            <input
              id="duration"
              type="range"
              min="100"
              step={100}
              max="2000"
              value={animationDuration}
              onChange={(e) => setAnimationDuration(parseInt(e.target.value))}
            />
            <div>{animationDuration / 1000}s</div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            <label htmlFor="loop">Loop</label>
            <input
              id="loop"
              type="checkbox"
              checked={loop}
              onChange={(e) => setLoop(e.target.checked)}
            />
          </div>
        </div>
        <Search />
      </div>
    </ScrollingTextProvider>
  );
}

export default App;
