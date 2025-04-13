import React from "react";
import { GrDocumentConfig } from "react-icons/gr";
import { FaFile } from "react-icons/fa";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const WithConfig = ({number}:ElementProps) => {
  return (
    <div id="config">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <GrDocumentConfig />
        {number}. Config
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-2">
        <div className="flex-1 pl-2 max-w-3xl">
          <h3 className="file-name flex gap-2 items-center">
            <FaFile />
            App.tsx
          </h3>
          <Code>{code}</Code>
        </div>
        <div className="flex-1 pl-2 max-w-3xl">
          <h3 className="file-name flex gap-2 items-center">
            <FaFile />
            App.module.css
          </h3>
          <Code language={"css"}>{css}</Code>
        </div>
      </div>
    </div>
  );
};

const code = `import React from "react";
import ScrollingText from "web-scrolling-text/react";
import style from "./App.module.css";

function App() {
  return (
    <ScrollingText
      options={{
          animationDuration: 1000,
          interval: 3000,
          enterAnimation: style.fadeIn,
          exitAnimation: style.fadeOut,
          loop:false,
      }}
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;
const css = `@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`;
export default WithConfig;
