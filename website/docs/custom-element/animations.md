---
sidebar_position: 2 
---

# Animations

Add stunning visual effects to your scrolling text with pre-built animation modules.

import AnimationDocs from '@site/src/components/AnimationDocs';

<AnimationDocs framework="element" />

## Using with Module Bundlers

If you're using a module bundler (Vite, Webpack, etc.):

```javascript title="main.js"
import { register } from 'web-scrolling-text/element';
import fade from 'web-scrolling-text/animation/fade';

// Register the custom element
register();

// Apply animations to the custom element
const scroller = document.querySelector('scrolling-text');
scroller.setAttribute('enter-animation', fade.enterAnimation);
scroller.setAttribute('exit-animation', fade.exitAnimation);
```

## Mixing Enter and Exit Animations

You can use different animations for enter and exit by specifying different animations on attributes:

```javascript
import { register } from 'web-scrolling-text/element';
import fadeAnim from 'web-scrolling-text/animation/fade';
import bounceAnim from 'web-scrolling-text/animation/bounce';

register();

const scroller = document.querySelector('scrolling-text');
scroller.setAttribute('enter-animation', fadeAnim.enterAnimation);
scroller.setAttribute('exit-animation', bounceAnim.exitAnimation);
```

## Custom Animation Duration

Combine custom animations with attributes like `animation-duration` and `interval`:

```html
<scrolling-text 
  id="scroller" 
  interval="1500" 
  animation-duration="500"
>
  <div>Fade in and out</div>
  <div>Beautiful animations</div>
</scrolling-text>

<!-- Load the fade animation module -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
<script>
  const scroller = document.getElementById('scroller');
  scroller.setAttribute('enter-animation', ScrollingTextAnimation.fade.enterAnimation);
  scroller.setAttribute('exit-animation', ScrollingTextAnimation.fade.exitAnimation);
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

:::tip 
Try the Playground
Visit the [interactive playground](/playground) to preview all animations and generate code snippets!
:::