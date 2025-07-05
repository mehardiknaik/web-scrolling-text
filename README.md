# 🎬 Web Scrolling Text

A lightweight, customizable text animation library for creating smooth scrolling text effects.

**[🚀 Live Demo](https://mehardiknaik.github.io/web-scrolling-text/)**

https://github.com/user-attachments/assets/87e55d25-2435-4ca6-aaad-ef0fb9d378d7

## 📦 Installation

```bash
npm i web-scrolling-text
```

## 🚀 Quick Start

### Vanilla JavaScript

```html
<div id="myText"></div>
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
<script>
  const scroller = new ScrollingText(document.getElementById("myText"), [
    "Hello",
    "World",
    "👋",
  ]);
  scroller.start();
</script>
```

### React

```tsx
import ScrollingText from "web-scrolling-text/react";

function App() {
  return (
    <ScrollingText>
      <div>Hello</div>
      <div>World</div>
      <div>👋</div>
    </ScrollingText>
  );
}
```

### Next.js

```tsx
"use client";
import ScrollingText from "web-scrolling-text/react";

export default function App() {
  return (
    <ScrollingText options={{ interval: 2000 }}>
      <div>Welcome</div>
      <div>to Next.js</div>
    </ScrollingText>
  );
}
```

## ⚙️ Configuration

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

### Example with Options

**HTML/Vanilla JavaScript:**

```html
<div id="advancedText"></div>
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
<script>
  const scroller = new ScrollingText(
    document.getElementById("advancedText"),
    ["First", "Second", "Third"],
    {
      interval: 2500,
      animationDuration: 800,
      loop: false,
      onChange: (index) => console.log(`Current text: ${index}`),
    }
  );
  scroller.start();
</script>
```

**React:**

```tsx
<ScrollingText
  options={{
    interval: 2500,
    animationDuration: 800,
    loop: false,
    onChange: (index) => console.log(`Current text: ${index}`),
  }}
>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</ScrollingText>
```

### Example with Animation

**HTML/Vanilla JavaScript:**

```html
<div id="pluginText"></div>
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
<script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
<script>
  const scroller = new ScrollingText(
    document.getElementById("pluginText"),
    ["Fade In", "Fade Out", "Animation"],
    {
      ...ScrollingTextAnimation.fade,
    }
  );
  scroller.start();
</script>
```

**React:**

```tsx
import ScrollingText from "web-scrolling-text/react";
import fadeAnimation from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={{ ...fadeAnimation }}>
      <div>Fade In</div>
      <div>Fade Out</div>
      <div>Animation</div>
    </ScrollingText>
  );
}
```

## 🎮 Methods

Control your scrolling text programmatically:

| Method                | Description                         |
| --------------------- | ----------------------------------- |
| `start()`             | ▶️ Start the animation              |
| `pause()`             | ⏸️ Pause the animation              |
| `stop()`              | ⏹️ Stop and reset to first text     |
| `dispose()`           | 🗑️ Clean up and remove all elements |

### Using Methods

```javascript
const scroller = new ScrollingText(container, texts);

scroller.start(); // Start animation
scroller.pause(); // Pause it
scroller.stop(); // Stop and reset
scroller.dispose(); // Clean up
```

## 📋 Version Info

```javascript
import ScrollingText from "web-scrolling-text";
console.log(ScrollingText.version); // Get current version
```

## License

MIT © [Hardik Naik](https://github.com/mehardiknaik)
