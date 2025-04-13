import React from "react";
import { BsCalendar3Event } from "react-icons/bs";
import Code from "@/components/Code";
import { ElementProps } from "./elementProps.";

const WithEvents = ({ number }: ElementProps) => {
  return (
    <div id="events">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        <BsCalendar3Event />
        {number}. Events
      </h2>
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
    <ScrollingText
      options={{
        onStart: () => console.log("Scrolling started"),
        onChange: (index) => console.log("Changed to:", index),
        onStop: () => console.log("Scrolling stopped"),
        onReachEnd: () => console.log("Reached end"),
      }}
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
`;

export default WithEvents;
