---
sidebar_position: 5
---

# Animation

## Simple

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
// highlight-next-line
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    // highlight-next-line
    <ScrollingText options={fade}>
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
```

## Multiple Animations for entering and exiting text

You can use diffents animations for entering and exiting the text

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
// highlight-start
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";
// highlight-end

function App() {
  return (
    <ScrollingText
      // highlight-start
      options={{
        enterAnimation: fade.enterAnimation,
        exitAnimation: bounce.exitAnimation,
      }}
      // highlight-end
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
```

## With other Options

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText
      // highlight-start
      options={{
        ...fade,
        animationDuration: 1000,
        interval: 3000,
      }}
      // highlight-end
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
```

## With Global Configration

You can use animtions globally

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";
// highlight-next-line
import fade from "web-scrolling-text/animation/fade";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScrollingTextProvider
    options={{
      // highlight-next-line
      ...fade,
      interval: 3000,
      animationDuration: 1000,
      loop: true,
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```
