import React from "react";
import { PiPlugsFill } from "react-icons/pi";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const WithAnimations = ({ number }: ElementProps) => {
  return (
    <div id="plugin">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <PiPlugsFill />
        {number}. Predefined Animations
      </h2>
      <div className="w-full pl-2 max-w-3xl">
        <Code>{data}</Code>
      </div>
    </div>
  );
};

const data = `import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fadeAnimation from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={{...fadeAnimation}}>
        {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;

export default WithAnimations;
