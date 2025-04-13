import Code from "@/components/Code";
import React from "react";

const Simple = () => {
  return (
    <div id="simple">
      <h1 className="font-semibold text-2xl">Simple Example</h1>
      <div className="w-full pl-2 max-w-3xl">
        <Code>{data}</Code>
      </div>
    </div>
  );
};

const data = `import React from "react";
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

export default Simple;
