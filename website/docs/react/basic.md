---
sidebar_position: 1
---

# Basic Example

This is a simple example demonstrating how to use the `web-scrolling-text` React component. The `ScrollingText` component takes an array of strings and displays them as scrolling text within your application.

## With React
```tsx title="App.tsx"
import React from "react";
// highlight-next-line
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    // highlight-start
    <ScrollingText>
        {["Hello", "World", "How", "Are", "You"]}
    </ScrollingText>
    // highlight-end
  );
}

export default App;
```

## With Next js
for next js use `use client` on top of the component

```tsx title="App.tsx"
// highlight-next-line
"use client";
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
```
:::info

First element of the array is rendered on server side,
**Hello** is rendered on server

:::