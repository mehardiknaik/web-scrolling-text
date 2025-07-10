---
sidebar_position: 2
---

# Options & Customization

## Supported options

| Option              | Type       | Default | Description                       |
| ------------------- | ---------- | ------- | --------------------------------- |
| `interval`          | `number`   | `3000`  | Time between text changes (ms)    |
| `animationDuration` | `number`   | `1000`  | Animation duration (ms)           |
| `enterAnimation`    | `string`   | -       | CSS animation for text entry      |
| `exitAnimation`     | `string`   | -       | CSS animation for text exit       |
| `loop`              | `boolean`  | `true`  | Loop animation after reaching end |
| `onStart`           | `function` | -       | Callback when animation starts    |
| `onStop`            | `function` | -       | Callback when animation stops     |
| `onReachEnd`        | `function` | -       | Callback when reaching last text  |
| `onChange`          | `function` | -       | Callback when text changes        |

## Example with configration

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import style from "./App.module.css";

function App() {
  return (
    <ScrollingText
      // highlight-start
      options={{
        animationDuration: 1000,
        interval: 3000,
        enterAnimation: style.fadeIn,
        exitAnimation: style.fadeOut,
        loop: false,
      }}
      // highlight-end
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
```

```css title="App.module.css"
@keyframes fadeIn {
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
}
```
:::info

Some **Animations** are already avalible, Check [this](/docs/react/animations#with-other-options).

:::

## Example with Events

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <ScrollingText
      // highlight-start
      options={{
        onStart: () => console.log("Scrolling started"),
        onChange: (index) => console.log("Changed to:", index),
        onStop: () => console.log("Scrolling stopped"),
        onReachEnd: () => console.log("Reached end"),
      }}
      // highlight-end
    >
      {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
  );
}

export default App;
```
