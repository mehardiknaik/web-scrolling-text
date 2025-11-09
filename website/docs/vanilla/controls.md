---
sidebar_position: 3
---

# Control Methods

Control your scrolling text programmatically with the available instance methods.

## Available Methods

### start()

Starts the scrolling text animation.

```javascript
const scroller = new ScrollingText(container, texts);
scroller.start();
```

:::info
The animation won't begin until you call `start()`. This gives you control over when to begin the animation.
:::

### pause()

Pauses the animation at the current text without resetting.

```javascript
scroller.pause();
```

Call `start()` again to resume from where it was paused.

### stop()

Stops the animation and resets to the first text.

```javascript
scroller.stop();
```

### dispose()

Completely cleans up the scrolling text instance and removes all DOM elements.

```javascript
scroller.dispose();
```

:::warning
After calling `dispose()`, the instance cannot be reused. You'll need to create a new instance if you want to use scrolling text again.
:::

## Interactive Example

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Control Methods Demo</title>
  <style>
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    #container {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      margin: 40px;
      min-height: 100px;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  
  <div style="text-align: center;">
    <button onclick="handleStart()">▶️ Start</button>
    <button onclick="handlePause()">⏸️ Pause</button>
    <button onclick="handleStop()">⏹️ Stop</button>
    <button onclick="handleDispose()">🗑️ Dispose</button>
  </div>

  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  <script>
    const container = document.getElementById('container');
    const texts = ['Hello', 'World', 'Control', 'Methods', 'Demo'];
    
    let scroller = new ScrollingText(container, texts, {
      interval: 2000,
      animationDuration: 600
    });

    function handleStart() {
      scroller.start();
      console.log('Animation started');
    }

    function handlePause() {
      scroller.pause();
      console.log('Animation paused');
    }

    function handleStop() {
      scroller.stop();
      console.log('Animation stopped and reset');
    }

    function handleDispose() {
      scroller.dispose();
      console.log('Instance disposed');
      alert('Instance disposed! Refresh page to create new instance.');
    }
  </script>
</body>
</html>
```

## Method Chaining

Some methods return the instance, allowing for method chaining:

```javascript
const scroller = new ScrollingText(container, texts)
  .start();

// Or with plugins
const scroller = new ScrollingText(container, texts)
  .addPlugins([myPlugin])
  .start();
```

## Practical Use Cases

### Auto-start after delay

```javascript
const scroller = new ScrollingText(container, texts);

// Start after 2 seconds
setTimeout(() => {
  scroller.start();
}, 2000);
```

### Pause on hover

```javascript
const scroller = new ScrollingText(container, texts);
scroller.start();

container.addEventListener('mouseenter', () => {
  scroller.pause();
});

container.addEventListener('mouseleave', () => {
  scroller.start();
});
```

### Stop on user interaction

```javascript
const scroller = new ScrollingText(container, texts);
scroller.start();

document.getElementById('stopButton').addEventListener('click', () => {
  scroller.stop();
});
```

### Clean up on page navigation

```javascript
const scroller = new ScrollingText(container, texts);
scroller.start();

window.addEventListener('beforeunload', () => {
  scroller.dispose();
});
```

## Lifecycle Example

```javascript
const container = document.getElementById('container');
const texts = ['One', 'Two', 'Three'];

// Create instance
const scroller = new ScrollingText(container, texts, {
  onStart: () => console.log('Lifecycle: Started'),
  onStop: () => console.log('Lifecycle: Stopped'),
  onChange: (index) => console.log('Lifecycle: Changed to index', index)
});

// Start animation
scroller.start();  // Logs: "Lifecycle: Started"

// Later... pause it
setTimeout(() => {
  scroller.pause();  // Animation pauses
  console.log('Lifecycle: Paused');
}, 5000);

// Resume after another delay
setTimeout(() => {
  scroller.start();  // Animation resumes
}, 8000);

// Stop and reset
setTimeout(() => {
  scroller.stop();  // Logs: "Lifecycle: Stopped"
}, 12000);

// Clean up
setTimeout(() => {
  scroller.dispose();
  console.log('Lifecycle: Disposed');
}, 15000);
```

:::tip
Use `dispose()` when you're completely done with the scrolling text to free up memory and remove event listeners.
:::
