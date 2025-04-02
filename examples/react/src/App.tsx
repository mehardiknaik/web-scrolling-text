import { useEffect, useRef } from "react";
import Style from "./App.module.css";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import Scrolling, { PluginType } from "web-scrolling-text";
import fade from "web-scrolling-text/modules/fade";

const plugin={
  name: "test",
  init: (scrolling, options) => {
    console.log("Plugin initialized", scrolling, options);
  },
} as PluginType

function App() {
  const ref = useRef<Scrolling>(null);

  useEffect(() => {
    console.log(Scrolling.version);
  }, []);

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
            // enterAnimation: "enterup",
            // exitAnimation: "exitup",
          }}
          plugins={[plugin]}
        >
          <div className={Style.hello}>Hey</div>
          <div className={Style.how}>Welcome Back</div>
          <div className={Style.are}>Loren Ipsum</div>
          <div className={Style.you}>How Are You !</div>
          bye
        </ScrollingText>
        <div>After</div>
      <div>
        <button onClick={() => ref.current?.start()}>Start</button>
        <button onClick={() => ref.current?.stop()}>Stop</button>
        <button onClick={() => ref.current?.pause()}>pause</button>
        <button onClick={() => ref.current?.dispose()}>dispose</button>
        <button onClick={() => ref.current?.addPlugins([fade])}>addPlugin</button>
      </div>
      </div>
    </ScrollingTextProvider>
  );
}

export default App;
