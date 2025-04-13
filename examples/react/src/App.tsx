import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

function App() {
  const ref = React.useRef<ScrollingType>(null);
  return (
    <ScrollingText ref={ref}>
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
