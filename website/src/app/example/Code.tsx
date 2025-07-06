"use client";
import React, { useEffect } from "react";
import { useConfig } from "./Context";
import VsCode from "@/components/Code";

const Code = () => {
  const { options, animationName } = useConfig();
  const [reactData, setReactData] = React.useState<string>(
    getReactComponent(options, animationName)
  );
  useEffect(() => {
    setReactData(getReactComponent(options, animationName));
  }, [JSON.stringify(options), JSON.stringify(animationName)]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <div>
        <h1>React Code</h1>
        <VsCode>{reactData}</VsCode>
      </div>
    </div>
  );
};

const getReactComponent = (options: any, animationName: any): string => {
  const uniqueAnimations = [
    ...new Set(Object.values(animationName).filter(Boolean)),
  ];

  console.log(uniqueAnimations);
  return `import React from "react";
import ScrollingText from "web-scrolling-text/react";
${uniqueAnimations
  .map((animation) => {
    return `import ${animation} from "web-scrolling-text/animation/${animation}"`;
  })
  .join("\n")}
function App() {
  return (
    <ScrollingText options={{
            interval: ${options?.interval || 3000},
            loop: ${options?.loop || true},
            animationDuration: ${options?.animationDuration || 1000},
           ${animationName?.enterAnimation ? `enterAnimation:`:''},
            exitAnimation: ${animationName?.exitAnimation ?? "''"},
      >
        {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;
};

export default Code;
