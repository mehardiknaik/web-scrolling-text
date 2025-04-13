import React from "react";
import { AiFillControl } from "react-icons/ai";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const WithControls = ({number}:ElementProps) => {
  return (
    <div id="control">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <AiFillControl />
        {number}. Control
      </h2>
      <p><code>Start, Stop, Pause, Dispose</code> methods are avaliable to Control the animation</p>
      <div className="w-full pl-2 max-w-3xl">
        <Code
        >
          {data}
        </Code>
      </div>
    </div>
  );
};

const data = `import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

function App() {
  const ref = React.useRef<ScrollingType>(null);

  const handleStart = () => {
    ref.current?.start();
  };
  const handleStop = () => {
    ref.current?.stop();
  };
  const handlePause = () => {
    ref.current?.pause();
  };
  const handleDestroy = () => {
    ref.current?.dispose();
  };
  return (
    <ScrollingText ref={ref}>
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;

export default WithControls;
