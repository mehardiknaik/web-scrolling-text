---
sidebar_position: 5
---

# Animations

Add beautiful pre-built animation effects to your React scrolling text component.

## Available Animations

The library includes these pre-built animation modules:

- **fade** - Smooth fade in/out transition
- **bounce** - Bouncy entrance and exit
- **flip** - 3D flip effect
- **rotate** - Rotation animation
- **scaleIn** - Scale up entrance
- **scaleOut** - Scale down exit
- **zoomInDown** - Zoom in from top

## Basic Usage

Import and spread the animation object into your options:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={fade}>
      <div>Beautiful</div>
      <div>Fade</div>
      <div>Animation</div>
    </ScrollingText>
  );
}

export default App;
```

## Animation Examples

### Fade Animation

```tsx
import fade from "web-scrolling-text/animation/fade";

<ScrollingText options={fade}>
  <div>Fade In</div>
  <div>Fade Out</div>
</ScrollingText>
```

### Bounce Animation

```tsx
import bounce from "web-scrolling-text/animation/bounce";

<ScrollingText options={bounce}>
  <div>Bounce</div>
  <div>Effect</div>
</ScrollingText>
```

### Flip Animation

```tsx
import flip from "web-scrolling-text/animation/flip";

<ScrollingText options={flip}>
  <div>Flip</div>
  <div>Transition</div>
</ScrollingText>
```

### Rotate Animation

```tsx
import rotate from "web-scrolling-text/animation/rotate";

<ScrollingText options={rotate}>
  <div>Rotate</div>
  <div>Effect</div>
</ScrollingText>
```

### Scale In Animation

```tsx
import scaleIn from "web-scrolling-text/animation/scaleIn";

<ScrollingText options={scaleIn}>
  <div>Scale</div>
  <div>In</div>
</ScrollingText>
```

### Scale Out Animation

```tsx
import scaleOut from "web-scrolling-text/animation/scaleOut";

<ScrollingText options={scaleOut}>
  <div>Scale</div>
  <div>Out</div>
</ScrollingText>
```

### Zoom In Down Animation

```tsx
import zoomInDown from "web-scrolling-text/animation/zoomInDown";

<ScrollingText options={zoomInDown}>
  <div>Zoom</div>
  <div>In</div>
</ScrollingText>
```

## Mixing Enter and Exit Animations

Use different animations for enter and exit by accessing the individual properties:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";

function App() {
  return (
    <ScrollingText
      options={{
        enterAnimation: fade.enterAnimation,
        exitAnimation: bounce.exitAnimation,
      }}
    >
      <div>Fade In</div>
      <div>Bounce Out</div>
    </ScrollingText>
  );
}

export default App;
```

## Combining with Other Options

Spread the animation and add custom options:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText
      options={{
        ...fade,
        interval: 2000,
        animationDuration: 600,
        loop: true
      }}
    >
      <div>Custom</div>
      <div>Configuration</div>
      <div>With Animation</div>
    </ScrollingText>
  );
}

export default App;
```

## With Global Configuration

Apply animations globally to all ScrollingText components:

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
      interval: 3000,
      animationDuration: 1000,
      loop: true,
    }}
  >
    <App />
  </ScrollingTextProvider>
);
```

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <div>
      {/* This will use the global fade animation */}
      <ScrollingText>
        <div>Inherits</div>
        <div>Global</div>
        <div>Animation</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

## Multiple Components with Different Animations

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";
import flip from "web-scrolling-text/animation/flip";

function App() {
  return (
    <div>
      <ScrollingText options={fade}>
        <div>Fade</div>
        <div>Animation</div>
      </ScrollingText>

      <ScrollingText options={bounce}>
        <div>Bounce</div>
        <div>Animation</div>
      </ScrollingText>

      <ScrollingText options={flip}>
        <div>Flip</div>
        <div>Animation</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

## TypeScript Support

All animation modules are fully typed:

```tsx
import type { OptionsType } from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

// fade is typed as { enterAnimation: string; exitAnimation: string; }
const options: OptionsType = {
  ...fade,
  interval: 2000
};
```

## Creating Dynamic Animations

```tsx title="App.tsx"
import React, { useState } from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";
import flip from "web-scrolling-text/animation/flip";

const animations = { fade, bounce, flip };

function App() {
  const [selectedAnim, setSelectedAnim] = useState<'fade' | 'bounce' | 'flip'>('fade');

  return (
    <div>
      <select onChange={(e) => setSelectedAnim(e.target.value as any)}>
        <option value="fade">Fade</option>
        <option value="bounce">Bounce</option>
        <option value="flip">Flip</option>
      </select>

      <ScrollingText options={animations[selectedAnim]}>
        <div>Dynamic</div>
        <div>Animation</div>
        <div>Switching</div>
      </ScrollingText>
    </div>
  );
}

export default App;
```

:::tip Try the Playground
Visit the [interactive playground](/playground) to preview all animations and see them in action!
:::

## Animation Import Paths

All animations can be imported from:

```tsx
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";
import flip from "web-scrolling-text/animation/flip";
import rotate from "web-scrolling-text/animation/rotate";
import scaleIn from "web-scrolling-text/animation/scaleIn";
import scaleOut from "web-scrolling-text/animation/scaleOut";
import zoomInDown from "web-scrolling-text/animation/zoomInDown";
```
