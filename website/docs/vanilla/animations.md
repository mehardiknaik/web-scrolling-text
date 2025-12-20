---
sidebar_position: 4
---

# Animations

Add stunning visual effects to your scrolling text with pre-built animation modules.

import AnimationDocs from '@site/src/components/AnimationDocs';

<AnimationDocs framework="vanilla" />

## Using with Module Bundlers

If you're using a module bundler:

```javascript title="main.js"
import ScrollingText from 'web-scrolling-text';
import fade from 'web-scrolling-text/animation/fade';

const container = document.getElementById('container');
const texts = ['Hello', 'World'];

const scroller = new ScrollingText(container, texts, {
  ...fade,
  interval: 2000
});

scroller.start();
```

## Mixing Enter and Exit Animations

You can use different animations for enter and exit:

```javascript
import fadeAnim from 'web-scrolling-text/animation/fade';
import bounceAnim from 'web-scrolling-text/animation/bounce';

const scroller = new ScrollingText(container, texts, {
  enterAnimation: fadeAnim.enterAnimation,
  exitAnimation: bounceAnim.exitAnimation,
  interval: 2000
});

scroller.start();
```

## Custom Animation Duration

Combine animations with custom durations:

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.fade,
    animationDuration: 500,  // Faster fade
    interval: 1500
  });
  scroller.start();
</script>
```

## CDN Links Reference

### unpkg

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

### jsdelivr

```html
<!-- Fade -->
<script src="https://cdn.jsdelivr.net/npm/web-scrolling-text/dist/animation/fade.min.js"></script>

<!-- Bounce -->
<script src="https://cdn.jsdelivr.net/npm/web-scrolling-text/dist/animation/bounce.min.js"></script>

<!-- ... and so on -->
```

:::tip Try the Playground
Visit the [interactive playground](/playground) to preview all animations and generate code snippets!
:::
