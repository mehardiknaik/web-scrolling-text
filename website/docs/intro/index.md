---
sidebar_position: 1
---

# Getting Started

Get up and running with web-scrolling-text in minutes. Choose between NPM installation or CDN usage based on your project needs.

## NPM Installation

Install the package using your preferred package manager:

```bash npm2yarn
npm i web-scrolling-text
```

### Usage with Module Bundlers

Once installed, you can import and use the library:

**Vanilla JavaScript/TypeScript:**

```javascript
import ScrollingText from 'web-scrolling-text';

const container = document.getElementById('myText');
const texts = ['Hello', 'World', 'Welcome'];

const scroller = new ScrollingText(container, texts);
scroller.start();
```

**React:**

```tsx
import ScrollingText from 'web-scrolling-text/react';

function App() {
  return (
    <ScrollingText>
      <div>Hello</div>
      <div>World</div>
      <div>Welcome</div>
    </ScrollingText>
  );
}
```

**Next.js:**

```tsx
"use client";
import ScrollingText from 'web-scrolling-text/react';

export default function Page() {
  return (
    <ScrollingText options={{ interval: 2000 }}>
      <div>Hello</div>
      <div>Next.js</div>
    </ScrollingText>
  );
}
```

## CDN Usage

For quick prototyping or projects without a build step, use a CDN. No installation required!

### unpkg

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrolling Text</title>
  </head>
  <body>
    <div id="container"></div>
    
    <!-- Include the library -->
    <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
    
    <!-- Your code -->
    <script>
      const container = document.getElementById('container');
      const texts = ['Hello', 'World', '👋'];
      
      const scroller = new ScrollingText(container, texts);
      scroller.start();
    </script>
  </body>
</html>
```

### jsDelivr

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrolling Text</title>
  </head>
  <body>
    <div id="container"></div>
    
    <!-- Include the library -->
    <script src="https://cdn.jsdelivr.net/npm/web-scrolling-text/dist/index.min.js"></script>
    
    <!-- Your code -->
    <script>
      const container = document.getElementById('container');
      const texts = ['Hello', 'World', '👋'];
      
      const scroller = new ScrollingText(container, texts);
      scroller.start();
    </script>
  </body>
</html>
```

## CDN with Animations

Include animation modules alongside the main library:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrolling Text with Animations</title>
  </head>
  <body>
    <div id="container"></div>
    
    <!-- Main library -->
    <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
    
    <!-- Animation module -->
    <script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
    
    <!-- Your code -->
    <script>
      const container = document.getElementById('container');
      const texts = ['Beautiful', 'Fade', 'Animation'];
      
      const scroller = new ScrollingText(container, texts, {
        ...ScrollingTextAnimation.fade,
        interval: 2000
      });
      scroller.start();
    </script>
  </body>
</html>
```

### Available Animation CDN Links

**unpkg:**

```html
<!-- Fade -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>

<!-- Bounce -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/bounce.min.js"></script>

<!-- Flip -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/flip.min.js"></script>

<!-- Rotate -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/rotate.min.js"></script>

<!-- Scale In -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleIn.min.js"></script>

<!-- Scale Out -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleOut.min.js"></script>

<!-- Zoom In Down -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/zoomInDown.min.js"></script>
```

**jsDelivr:**

```html
<!-- Just replace unpkg.com with cdn.jsdelivr.net/npm -->
<script src="https://cdn.jsdelivr.net/npm/web-scrolling-text/dist/animation/fade.min.js"></script>
```

## Version Pinning

### NPM

Install a specific version:

```bash
npm i web-scrolling-text@1.0.0
```

### CDN

Pin to a specific version by including it in the URL:

```html
<!-- unpkg -->
<script src="https://unpkg.com/web-scrolling-text@1.0.0/dist/index.min.js"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/web-scrolling-text@1.0.0/dist/index.min.js"></script>
```

:::tip Recommended
For production, always pin to a specific version to ensure stability and prevent unexpected breaking changes.
:::

## Next Steps

Now that you have the library installed, explore the documentation:

- **Vanilla JS:** [Basic Usage](/docs/vanilla/basic) • [Options](/docs/vanilla/options) • [Controls](/docs/vanilla/controls) • [Animations](/docs/vanilla/animations)
- **React:** [Basic Usage](/docs/react/basic) • [Options](/docs/react/options-customization) • [Controls](/docs/react/controls) • [Animations](/docs/react/animations)
- **Try the [Interactive Playground](/playground)**

:::info Package Information
- **Package Name:** `web-scrolling-text`
- **NPM:** [npmjs.com/package/web-scrolling-text](https://www.npmjs.com/package/web-scrolling-text)
- **GitHub:** [mehardiknaik/web-scrolling-text](https://github.com/mehardiknaik/web-scrolling-text)
:::
