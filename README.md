# 🎬 Web Scrolling Text

A lightweight, customizable text animation library for creating smooth scrolling text effects with support for React, Next.js, Angular, and Vanilla JavaScript.

**[🚀 Live Demo](https://mehardiknaik.github.io/web-scrolling-text/)** • **[🎮 Playground](https://mehardiknaik.github.io/web-scrolling-text/playground)** • **[📚 Documentation](https://mehardiknaik.github.io/web-scrolling-text/docs/intro)**

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
  const scroller = new ScrollingText(
    document.getElementById("myText"),
    ["Hello", "World", "👋"]
  );
  scroller.start();
</script>
```

[→ View Vanilla JS Docs](https://mehardiknaik.github.io/web-scrolling-text/docs/vanilla/basic)

### Web Component

**Via CDN:**

```html
<script src="https://unpkg.com/web-scrolling-text/dist/element.min.js"></script>

<scrolling-text>
  <div>Hello</div>
  <div>World</div>
</scrolling-text>
```

**Via NPM (Bundlers):**

```javascript
import { register } from "web-scrolling-text/element";
register();
```

[→ View Web Component Docs](https://mehardiknaik.github.io/web-scrolling-text/docs/custom-element/getting-started)

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

[→ View React Docs](https://mehardiknaik.github.io/web-scrolling-text/docs/react/basic)

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

## ✨ Features

- 🎨 **8+ Pre-built Animations** - Fade, bounce, flip, rotate, scale, and more
- ⚡ **Lightweight** - Minimal bundle size with zero dependencies
- 🔧 **Highly Customizable** - Control timing, animations, and behavior
- 📱 **Responsive** - Works seamlessly on all devices
- 🎯 **TypeScript Support** - Full type definitions included
- 🌐 **Framework Agnostic** - Use with React, Next.js, Angular, or vanilla JS
- 🎭 **SSR Compatible** - Works with server-side rendering
- ♿ **Accessible** - Built with accessibility in mind

## 📖 Documentation

### Getting Started
- [Installation](https://mehardiknaik.github.io/web-scrolling-text/docs/intro)
- [CDN Usage](https://mehardiknaik.github.io/web-scrolling-text/docs/intro#cdn-usage)

### Vanilla JavaScript
- [Basic Usage](https://mehardiknaik.github.io/web-scrolling-text/docs/vanilla/basic)
- [Configuration Options](https://mehardiknaik.github.io/web-scrolling-text/docs/vanilla/options)
- [Control Methods](https://mehardiknaik.github.io/web-scrolling-text/docs/vanilla/controls)
- [Animations](https://mehardiknaik.github.io/web-scrolling-text/docs/vanilla/animations)

### React
- [Basic Usage](https://mehardiknaik.github.io/web-scrolling-text/docs/react/basic)
- [Configuration Options](https://mehardiknaik.github.io/web-scrolling-text/docs/react/options-customization)
- [Control Methods](https://mehardiknaik.github.io/web-scrolling-text/docs/react/controls)
- [Global Configuration](https://mehardiknaik.github.io/web-scrolling-text/docs/react/global-configration)
- [Animations](https://mehardiknaik.github.io/web-scrolling-text/docs/react/animations)

### Angular
- [Basic Usage](https://mehardiknaik.github.io/web-scrolling-text/docs/angular/basic)
- [Configuration Options](https://mehardiknaik.github.io/web-scrolling-text/docs/angular/options)
- [Control Methods](https://mehardiknaik.github.io/web-scrolling-text/docs/angular/controls)
- [Animations](https://mehardiknaik.github.io/web-scrolling-text/docs/angular/animations)

### Web Component
- [Getting Started](https://mehardiknaik.github.io/web-scrolling-text/docs/custom-element/getting-started)
- [Framework Integration](https://mehardiknaik.github.io/web-scrolling-text/docs/custom-element/frameworks)

### Additional Resources
- [API Reference & Types](https://mehardiknaik.github.io/web-scrolling-text/docs/version)
- [Interactive Playground](https://mehardiknaik.github.io/web-scrolling-text/playground)
- [Git Examples](https://mehardiknaik.github.io/web-scrolling-text/examples)

## 🎯 Quick Examples

### With Animation

```tsx
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

<ScrollingText options={{ ...fade }}>
  <div>Beautiful</div>
  <div>Animations</div>
</ScrollingText>
```

### With Control Methods

```tsx
const scrollerRef = useRef();

<ScrollingText ref={scrollerRef}>
  <div>Controlled</div>
  <div>Animation</div>
</ScrollingText>

scrollerRef.current?.pause();  // Pause
scrollerRef.current?.start();  // Resume
```

[→ See more examples](https://mehardiknaik.github.io/web-scrolling-text/docs/intro)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ICS © [Hardik Naik](https://github.com/mehardiknaik)

## 🔗 Links

- [GitHub Repository](https://github.com/mehardiknaik/web-scrolling-text)
- [NPM Package](https://www.npmjs.com/package/web-scrolling-text)
- [Documentation](https://mehardiknaik.github.io/web-scrolling-text/docs/intro)
- [Live Demo](https://mehardiknaik.github.io/web-scrolling-text/)
- [Playground](https://mehardiknaik.github.io/web-scrolling-text/playground)
- [Examples](https://mehardiknaik.github.io/web-scrolling-text/examples)
