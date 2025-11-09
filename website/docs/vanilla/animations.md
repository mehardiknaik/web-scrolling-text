---
sidebar_position: 4
---

# Animations

Add stunning visual effects to your scrolling text with pre-built animation modules.

## Available Animations

The library includes several pre-built animation effects:

- **Fade** - Smooth fade in/out transition
- **Bounce** - Bouncy entrance and exit
- **Flip** - 3D flip effect
- **Rotate** - Rotation animation
- **Scale In** - Scale up entrance
- **Scale Out** - Scale down exit
- **Hinge** - Hinge-like rotation
- **Zoom In Down** - Zoom in from top

## Using Animations with CDN

Include the animation module after the main library:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fade Animation</title>
</head>
<body>
  <div id="container"></div>

  <!-- Main library -->
  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  
  <!-- Animation module -->
  <script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
  
  <script>
    const container = document.getElementById('container');
    const texts = ['Hello', 'World', 'Fade', 'Animation'];
    
    const scroller = new ScrollingText(container, texts, {
      // Spread the animation config
      ...ScrollingTextAnimation.fade,
      interval: 2000
    });
    
    scroller.start();
  </script>
</body>
</html>
```

## Animation Examples

### Fade Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.fade
  });
  scroller.start();
</script>
```

### Bounce Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/bounce.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.bounce
  });
  scroller.start();
</script>
```

### Flip Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/flip.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.flip
  });
  scroller.start();
</script>
```

### Rotate Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/rotate.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.rotate
  });
  scroller.start();
</script>
```

### Scale In Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleIn.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.scaleIn
  });
  scroller.start();
</script>
```

### Scale Out Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleOut.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.scaleOut
  });
  scroller.start();
</script>
```

### Hinge Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/hinge.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.hinge
  });
  scroller.start();
</script>
```

### Zoom In Down Animation

```html
<script src="https://unpkg.com/web-scrolling-text/dist/animation/zoomInDown.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.zoomInDown
  });
  scroller.start();
</script>
```

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

<!-- Hinge -->
<script src="https://unpkg.com/web-scrolling-text/dist/animation/hinge.min.js"></script>

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
