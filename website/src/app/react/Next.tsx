import Code from "@/components/Code";
import React from "react";

const Next = () => {
  return (
    <div id="next">
      <h1 className="font-semibold text-2xl">Next JS Example</h1>
      <div className="w-full pl-2 max-w-3xl">
        <Code>{data}</Code>
      </div>
    </div>
  );
};

const data = `"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <ScrollingText>
        {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;

export default Next;
