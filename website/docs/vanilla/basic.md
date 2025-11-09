---
sidebar_position: 1
---

# Basic Usage

Learn how to create scrolling text animations with vanilla JavaScript.

## Quick Start

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scrolling Text Example</title>
</head>
<body>
  <!-- Container for scrolling text -->
  <div id="scrolling-container"></div>

  <!-- Include the library -->
  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  
  <script>
    // Get the container element
    const container = document.getElementById('scrolling-container');
    
    // Define your text array
    const texts = ['Hello', 'World', 'Welcome', 'to', 'Scrolling Text'];
    
    // Create a new ScrollingText instance
    const scroller = new ScrollingText(container, texts);
    
    // Start the animation
    scroller.start();
  </script>
</body>
</html>
```

## Constructor

The `ScrollingText` constructor takes three parameters:

```javascript
new ScrollingText(container, texts, options)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `container` | `HTMLElement` | ✅ Yes | The DOM element that will contain the scrolling text |
| `texts` | `string[]` | ✅ Yes | Array of strings to display |
| `options` | `object` | ❌ No | Configuration options (see below) |

## Basic Example with Options

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom Scrolling Text</title>
</head>
<body>
  <div id="my-scroller"></div>

  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  <script>
    const container = document.getElementById('my-scroller');
    const texts = ['First Text', 'Second Text', 'Third Text'];
    
    const scroller = new ScrollingText(container, texts, {
      interval: 2000,              // 2 seconds between changes
      animationDuration: 800,      // 800ms animation duration
      loop: true                   // Loop back to start
    });
    
    scroller.start();
  </script>
</body>
</html>
```

## Using with Module Bundlers

If you're using a module bundler like Webpack or Vite:

```javascript title="main.js"
import ScrollingText from 'web-scrolling-text';

const container = document.getElementById('scrolling-container');
const texts = ['Hello', 'World', 'Welcome'];

const scroller = new ScrollingText(container, texts, {
  interval: 3000,
  animationDuration: 1000
});

scroller.start();
```

## HTML Content

You can also use HTML strings in your text array:

```javascript
const texts = [
  '<strong>Bold Text</strong>',
  '<em>Italic Text</em>',
  '<span style="color: blue;">Blue Text</span>',
  '🎨 Emojis Work Too!'
];

const scroller = new ScrollingText(container, texts);
scroller.start();
```

:::tip
The first text in the array will be displayed immediately without animation. Subsequent texts will animate according to your configuration.
:::

:::warning
Make sure to call `scroller.start()` to begin the animation. The instance is created but not started by default.
:::
