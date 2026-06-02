---
sidebar_position: 1
---

# Getting Started

The package includes a native **Web Component** (Custom Element) that works in any HTML environment, with or without a framework.

## Installation

### Via CDN

The easiest way to use the component is via a CDN. Add this to your HTML head:

```html
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>  
<script src="https://unpkg.com/web-scrolling-text/dist/element.min.js"></script>
```

### Via NPM

If you are using a bundler (Vite, Webpack, etc.):

```bash npm2yarn
npm install web-scrolling-text
```

Then script import it in your entry file:

```javascript
import { register } from 'web-scrolling-text/element';
register();
```

## Basic Usage

Once registered, you can use the `<scrolling-text>` tag directly in your HTML.

```html
<scrolling-text>
  <div>First Text</div>
  <div>Second Text</div>
  <div>Third Text</div>
</scrolling-text>
```

## Attributes

The component accepts several attributes to configure its behavior.

| Attribute            | Type      | Default       | Description                                                       |
|----------------------|-----------|---------------|-------------------------------------------------------------------|
| `interval`           | `number`  | `3000`        | Time in milliseconds between text changes                         |
| `animation-duration` | `number`  | `1000`        | Duration of the animation in milliseconds                         |
| `enter-animation`    | `string`  | `zoomInDown`  | Name of the entrance animation                                    |
| `exit-animation`     | `string`  | `zoomOutDown` | Name of the exit animation                                        |
| `loop`               | `boolean` | `true`        | Whether to loop through the texts (`true`/`false`)                |
| `auto-start`         | `boolean` | `true`        | Whether to start animation automatically on load (`true`/`false`) |

### Example with Attributes

```html
<scrolling-text 
  interval="2000" 
  animation-duration="500" 
  enter-animation="flipInX" 
  exit-animation="flipOutX"
  loop="true"
>
  <div>Fast Update</div>
  <div>Flip Animation</div>
  <div>Custom Config</div>
</scrolling-text>
```

## JavaScript API

The DOM element exposes public methods to control the animation.

```javascript
const element = document.querySelector('scrolling-text');

// Methods
element.start();   // Start/Resume animation
element.pause();   // Pause animation
element.stop();    // Stop and reset
element.dispose(); // Cleanup resources
```
