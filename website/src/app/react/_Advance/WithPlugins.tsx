import React from "react";
import { PiPlugsFill } from "react-icons/pi";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const WithPlugins = ({ number }: ElementProps) => {
  return (
    <div id="plugin">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <PiPlugsFill />
        {number}. Plugin
      </h2>
      <div className="w-full pl-2 max-w-3xl">
        <Code>{data}</Code>
      </div>
    </div>
  );
};

const data = `import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fadeAnimation from "web-scrolling-text/modules/fade";

function App() {
  return (
    <ScrollingText plugins={[fadeAnimation]}>
        {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;

export default WithPlugins;
