---
sidebar_position: 1
---

# Basic Usage

This guide demonstrates how to use the `web-scrolling-text` React component in your applications.

## Installation

First, install the package:

```bash npm2yarn
npm i web-scrolling-text
```

## Simple Example

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <ScrollingText>
      <div>Hello</div>
      <div>World</div>
      <div>How</div>
      <div>Are</div>
      <div>You</div>
    </ScrollingText>
  );
}

export default App;
```

## With Next.js

For Next.js (App Router), use the `"use client"` directive:

```tsx title="app/page.tsx"
"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";

export default function Page() {
  return (
    <ScrollingText>
      <div>Hello</div>
      <div>World</div>
      <div>Welcome to Next.js</div>
    </ScrollingText>
  );
}
```

:::info Server-Side Rendering
The first element in your children array is rendered on the server side. In the example above, **"Hello"** will be rendered on the server, ensuring SEO-friendly content.
:::

## Using an Array

You can also pass an array of elements:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  const texts = ['Hello', 'World', 'How', 'Are', 'You'];
  
  return (
    <ScrollingText>
      {texts.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </ScrollingText>
  );
}

export default App;
```

## With JSX Elements

You can use any JSX elements, not just plain text:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <ScrollingText>
      <h1>Welcome</h1>
      <p style={{ color: 'blue' }}>Styled Text</p>
      <div>
        <strong>Bold</strong> and <em>italic</em>
      </div>
      <div>🎨 Emojis Work!</div>
    </ScrollingText>
  );
}

export default App;
```

## TypeScript Support

The component is fully typed and works seamlessly with TypeScript:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

const App: React.FC = () => {
  return (
    <ScrollingText>
      <div>TypeScript</div>
      <div>Supported</div>
    </ScrollingText>
  );
};

export default App;
```

:::tip
The component automatically starts the animation when mounted. You don't need to call any additional methods for basic usage.
:::

## Next Steps

- [Learn about configuration options](./options-customization.md)
- [Add animations](./animations.md)
- [Use control methods](./controls.mdx)
- [Global configuration](./global-configration.md)