---
sidebar_position: 5
---

# Version & API Reference

Get the current version of the library and access type definitions.

## Getting Version

### Vanilla JavaScript / TypeScript

```javascript
import ScrollingText from 'web-scrolling-text';

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
import type { 
  ConfigType,
  OptionsType, 
  TextType,
  PluginType 
} from 'web-scrolling-text';
```

### React Types

```typescript
import type { ScrollingType } from 'web-scrolling-text';
import ScrollingText from 'web-scrolling-text/react';

const ref = React.useRef<ScrollingType>(null);
```

## Type Definitions

### ConfigType

Configuration options for the scrolling text:

```typescript
interface ConfigType {
  interval?: number;              // Time between changes (ms)
  animationDuration?: number;     // Animation duration (ms)
  enterAnimation?: string;        // CSS animation for entry
  exitAnimation?: string;         // CSS animation for exit
  loop?: boolean;                 // Loop after reaching end
}
```

### MethodType

Callback methods:

```typescript
interface MethodType {
  onReachEnd?: () => void;        // Called when reaching end
  onChange?: (index: number) => void;  // Called on text change
  onStart?: () => void;           // Called on start
  onStop?: () => void;            // Called on stop
}
```

### OptionsType

Complete options (combination of Config and Methods):

```typescript
interface OptionsType extends ConfigType, MethodType {}
```

### TextType

Text content type:

```typescript
type TextType = string;
```

## Package Information

- **Package Name:** `web-scrolling-text`
- **GitHub:** [mehardiknaik/web-scrolling-text](https://github.com/mehardiknaik/web-scrolling-text)
- **NPM:** [web-scrolling-text](https://www.npmjs.com/package/web-scrolling-text)
- **License:** ISC
- **Author:** Hardik Naik

## Exports

### Main Export

```typescript
import ScrollingText from 'web-scrolling-text';
```

### React Export

```typescript
import ScrollingText, { ScrollingTextProvider } from 'web-scrolling-text/react';
```

### Animation Exports

```typescript
import fade from 'web-scrolling-text/animation/fade';
import bounce from 'web-scrolling-text/animation/bounce';
import flip from 'web-scrolling-text/animation/flip';
import rotate from 'web-scrolling-text/animation/rotate';
import scaleIn from 'web-scrolling-text/animation/scaleIn';
import scaleOut from 'web-scrolling-text/animation/scaleOut';
import hinge from 'web-scrolling-text/animation/hinge';
import zoomInDown from 'web-scrolling-text/animation/zoomInDown';
```

## Checking Compatibility

```javascript
// Check if ScrollingText is available
if (typeof ScrollingText !== 'undefined') {
  console.log('ScrollingText loaded, version:', ScrollingText.version);
} else {
  console.error('ScrollingText not loaded');
}
```

## Browser Support

The library supports all modern browsers that support ES6:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, use a polyfill or transpiler.

to get current **version** use:
```js
import ScrollingText from "web-scrolling-text";
//highlight-next-line
console.log(ScrollingText.version); 
```