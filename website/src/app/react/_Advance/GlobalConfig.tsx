import React from "react";
import { FaFile } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const GlobalConfig = ({ number }: ElementProps) => {
  return (
    <div id="global-config">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <HiMiniWrenchScrewdriver /> {number}. Global Configation
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
            global.css
          </h3>
          <Code language={"css"}>{css}</Code>
        </div>
      </div>
    </div>
  );
};

const code = `import React from "react";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import "./global.css";

function App() {
  return (
    <ScrollingTextProvider
      options={{
        interval: 3000,
        animationDuration: 1000,
        loop: true,
        enterAnimation: "fadeIn",
        exitAnimation: "fadeOut",
      }}
    >
      <ScrollingText>{["Hello", "World", "How", "Are", "You"]}</ScrollingText>
    </ScrollingTextProvider>
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

export default GlobalConfig;
