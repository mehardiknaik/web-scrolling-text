---
sidebar_position: 5
---

# Version & API Reference

Get the current version of the library and access type definitions.

## Getting Version

### Vanilla JavaScript / TypeScript

```javascript
import ScrollingText from "web-scrolling-text";

console.log(ScrollingText.version);
// Output: "0.0.0" (or current version)
```

### With CDN

```html
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
<script>
  console.log(ScrollingText.version);
</script>
```

## TypeScript Types

The library is fully typed with TypeScript. Import types from the package:

### Core Types

```typescript
import ScrollingText from "web-scrolling-text";
import type { OptionsType, ScrollingType } from "web-scrolling-text";
```

### React Types

```typescript
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import type { OptionsType, ScrollingType } from "web-scrolling-text";

// For component ref
const ref = React.useRef<ScrollingType>(null);
```

## Type Definitions

### OptionsType

Complete configuration and callback options:

```typescript
interface OptionsType {
  /**
   * The interval between each text change
   * @default 3000
   */
  interval?: number;
  
  /**
   * The duration of the animation
   * @default 1000
   */
  animationDuration?: number;
  
  /**
   * The animation to be used when the text enters the screen
   * Should be a valid CSS animation
   */
  enterAnimation?: string;
  
  /**
   * The animation to be used when the text exits the screen
   * Should be a valid CSS animation
   */
  exitAnimation?: string;
  
  /**
   * Loop the text after reaching the end
   * @default true
   */
  loop?: boolean;
  
  /**
   * Callback when the text reaches the end
   */
  onReachEnd?: () => void;
  
  /**
   * Callback when the text changes
   */
  onChange?: (index: number) => void;
  
  /**
   * Callback when the text starts scrolling
   */
  onStart?: () => void;
  
  /**
   * Callback when the text stops scrolling
   */
  onStop?: () => void;
}
```

### ScrollingType

The ScrollingText instance type with control methods:

```typescript
class ScrollingType {
  /**
   * Start the scrolling animation
   */
  start(): void;
  
  /**
   * Pause the scrolling animation
   */
  pause(): void;
  
  /**
   * Stop the scrolling animation and move to the first text
   */
  stop(): void;
  
  /**
   * Dispose the scrolling text and remove the container
   */
  dispose(): void;
  
  /**
   * Get the current version
   */
  static version: string;
}
```

## Package Information

- **Package Name:** `web-scrolling-text`
- **GitHub:** [mehardiknaik/web-scrolling-text](https://github.com/mehardiknaik/web-scrolling-text)
- **NPM:** [web-scrolling-text](https://www.npmjs.com/package/web-scrolling-text)
- **License:** ISC
- **Author:** Hardik Naik

## Available Exports

### Core Package (`web-scrolling-text`)

```typescript
// Default export - ScrollingText class
import ScrollingText from "web-scrolling-text";

// Type exports
import type { 
  OptionsType,     // Configuration and callback options
  ScrollingType    // ScrollingText instance type
} from "web-scrolling-text";
```

### React Package (`web-scrolling-text/react`)

```typescript
// Default export - React component
import ScrollingText from "web-scrolling-text/react";

// Named export - Context provider
import { ScrollingTextProvider } from "web-scrolling-text/react";

// Types from core package
import type { OptionsType, ScrollingType } from "web-scrolling-text";
```

### Animation Modules

```typescript
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";
import flip from "web-scrolling-text/animation/flip";
import rotate from "web-scrolling-text/animation/rotate";
import scaleIn from "web-scrolling-text/animation/scaleIn";
import scaleOut from "web-scrolling-text/animation/scaleOut";
import zoomInDown from "web-scrolling-text/animation/zoomInDown";

// Each animation exports an object with enterAnimation and exitAnimation
// Type: { enterAnimation: string; exitAnimation: string; }

// Usage - Spread the animation object into options
const options = {
  ...fade,
  interval: 3000
};

// Or use individual properties
const options2 = {
  enterAnimation: fade.enterAnimation,
  exitAnimation: bounce.exitAnimation
};
```

## Checking Compatibility

```javascript
// Check if ScrollingText is available
if (typeof ScrollingText !== "undefined") {
  console.log("ScrollingText loaded, version:", ScrollingText.version);
} else {
  console.error("ScrollingText not loaded");
}
```

## Browser Support

The library supports all modern browsers that support ES6:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, use a polyfill or transpiler.

## Complete Usage Example

```typescript
import ScrollingText from "web-scrolling-text";
import type { OptionsType, ScrollingType } from "web-scrolling-text";
import fade from "web-scrolling-text/animation/fade";
import bounce from "web-scrolling-text/animation/bounce";

// Use animation by spreading it into options
const options: OptionsType = {
  ...fade,
  interval: 3000,
  animationDuration: 1000,
  loop: true,
  onChange: (index: number) => console.log("Index:", index),
  onReachEnd: () => console.log("Reached end")
};

// Or mix different enter/exit animations
const mixedOptions: OptionsType = {
  enterAnimation: fade.enterAnimation,
  exitAnimation: bounce.exitAnimation,
  interval: 3000,
  animationDuration: 1000,
  loop: true
};

// Create instance with type
const scrollingText: ScrollingType = new ScrollingText(
  document.getElementById("container"),
  ["Text 1", "Text 2", "Text 3"],
  options
);

// Use control methods
scrollingText.start();
scrollingText.pause();
scrollingText.stop();
scrollingText.dispose();

// Check version
console.log(ScrollingText.version);
```
