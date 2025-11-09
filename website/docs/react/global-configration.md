---
sidebar_position: 4
---

# Global Configuration

Set default options for all ScrollingText components in your application using the `ScrollingTextProvider`.

## Basic Setup

Wrap your app with the `ScrollingTextProvider` and pass default options:

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollingTextProvider
    options={{
      interval: 3000,
      animationDuration: 1000,
      loop: true,
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

Now all `ScrollingText` components will inherit these options:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <div>
      {/* This will use interval: 3000, animationDuration: 1000, loop: true */}
      <ScrollingText>
        <div>Inherits</div>
        <div>Global</div>
        <div>Options</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

## With Custom Animations

Set global animations using CSS:

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollingTextProvider
    options={{
      interval: 3000,
      animationDuration: 1000,
      loop: true,
      enterAnimation: "fadeIn",
      exitAnimation: "fadeOut",
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

```css title="index.css"
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

## With Pre-built Animations

Use the library's pre-built animations globally:

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollingTextProvider
    options={{
      ...fade,
      interval: 2500,
      animationDuration: 800,
      loop: true,
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

:::tip
All ScrollingText components in your app will now use the fade animation by default!
:::

## Overriding Global Options

Individual components can override the global options:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import bounce from "web-scrolling-text/animation/bounce";

function App() {
  return (
    <div>
      {/* Uses global options */}
      <ScrollingText>
        <div>Global</div>
        <div>Settings</div>
      </ScrollingText>

      {/* Overrides with custom options */}
      <ScrollingText 
        options={{ 
          interval: 1000,
          ...bounce 
        }}
      >
        <div>Custom</div>
        <div>Settings</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

## Global Callbacks

Set global event callbacks:

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollingTextProvider
    options={{
      interval: 3000,
      onStart: () => console.log('Global: Animation started'),
      onChange: (index) => console.log('Global: Index changed to', index),
      onStop: () => console.log('Global: Animation stopped'),
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

## Next.js App Router

For Next.js with the App Router, create a client component wrapper:

```tsx title="app/providers.tsx"
"use client";

import { ScrollingTextProvider } from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollingTextProvider
      options={{
        ...fade,
        interval: 3000,
        animationDuration: 1000,
      }}
    >
      {children}
    </ScrollingTextProvider>
  );
}
```

```tsx title="app/layout.tsx"
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## Next.js Pages Router

For Next.js with Pages Router:

```tsx title="pages/_app.tsx"
import type { AppProps } from "next/app";
import { ScrollingTextProvider } from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollingTextProvider
      options={{
        ...fade,
        interval: 3000,
      }}
    >
      <Component {...pageProps} />
    </ScrollingTextProvider>
  );
}
```

## Complete Example

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ScrollingTextProvider } from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollingTextProvider
    options={{
      // Animation
      ...fade,
      
      // Timing
      interval: 2500,
      animationDuration: 800,
      
      // Behavior
      loop: true,
      
      // Callbacks
      onStart: () => console.log('Started'),
      onChange: (index) => console.log('Changed:', index),
      onStop: () => console.log('Stopped'),
      onReachEnd: () => console.log('Reached end'),
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import bounce from "web-scrolling-text/animation/bounce";

function App() {
  return (
    <div>
      <h2>Uses Global Fade Animation</h2>
      <ScrollingText>
        <div>Hello</div>
        <div>World</div>
      </ScrollingText>

      <h2>Overrides with Bounce Animation</h2>
      <ScrollingText options={{ ...bounce, interval: 1500 }}>
        <div>Custom</div>
        <div>Animation</div>
      </ScrollingText>

      <h2>Partial Override</h2>
      <ScrollingText options={{ interval: 5000 }}>
        <div>Slow</div>
        <div>Transition</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

## Benefits of Global Configuration

✅ **Consistency** - Same behavior across your entire app  
✅ **DRY Principle** - Define options once, use everywhere  
✅ **Easy Updates** - Change global settings in one place  
✅ **Flexible Overrides** - Components can still customize as needed  
✅ **Better Maintainability** - Centralized configuration management

:::info
Learn more about using pre-built animations globally in the [Animations documentation](./animations.md#with-global-configuration).
:::
