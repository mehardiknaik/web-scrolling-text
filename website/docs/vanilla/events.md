---
sidebar_position: 4
---

# Events

The `ScrollingText` instance acts as an event emitter, allowing you to listen to various lifecycle events and state changes. This is highly useful for synchronizing the scrolling text with other UI elements, triggering external animations, or tracking analytics.

You can register listeners using the `on` method, and remove them using the `off` method.

## Available Events

### `start`

Fired when the animation starts.

```javascript
scroller.on('start', () => {
  console.log('Animation started!');
});
```

### `stop`

Fired when the animation stops and resets to the first text.

```javascript
scroller.on('stop', () => {
  console.log('Animation stopped!');
});
```

### `pause`

Fired when the animation pauses at the current text.

- **Parameters:**
  - `index` (`number`): The current text index where the animation paused.

```javascript
scroller.on('pause', (index) => {
  console.log(`Paused at index: ${index}`);
});
```

### `change`

Fired each time the displayed text changes.

- **Parameters:**
  - `index` (`number`): The new text index.
  - `element` (`HTMLDivElement`): The DOM element representing the current text.

```javascript
scroller.on('change', (index, element) => {
  console.log(`Changed to index: ${index}`, element);
});
```

### `reachEnd`

Fired when reaching the last text in the sequence. Useful when `loop` is set to `false`.

```javascript
scroller.on('reachEnd', () => {
  console.log('Reached the end of the text sequence!');
});
```

## Removing Event Listeners

If you need to remove an event listener, you can use the `off` method by passing the exact event name and the original callback reference.

```javascript
const handleStop = () => console.log('Stopped!');

// Add listener
scroller.on('stop', handleStop);

// Remove listener later
scroller.off('stop', handleStop);
```

## Interactive Example

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Events Demo</title>
  <style>
    body { font-family: sans-serif; display: flex; gap: 40px; padding: 40px; }
    #container { font-size: 32px; font-weight: bold; flex: 1; }
    #event-log { 
      flex: 1; 
      background: #f4f4f4; 
      padding: 20px; 
      border-radius: 8px;
      height: 300px;
      overflow-y: auto;
      font-family: monospace;
    }
    .log-entry { margin-bottom: 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
  </style>
</head>
<body>
  <div id="container"></div>
  
  <div id="event-log">
    <h3>Event Log</h3>
    <!-- Logs will appear here -->
  </div>

  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  <script>
    const container = document.getElementById('container');
    const logContainer = document.getElementById('event-log');
    const texts = ['Initializing', 'Loading Data', 'Rendering UI', 'Complete'];
    
    let scroller = new ScrollingText(container, texts, { interval: 1500 });

    function logEvent(name, details = '') {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      entry.innerHTML = `<strong>${name}</strong> ${details}`;
      logContainer.appendChild(entry);
      logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll
    }

    // Attach all event listeners
    scroller.on('start', () => logEvent('🚀 start'));
    scroller.on('stop', () => logEvent('⏹️ stop'));
    scroller.on('change', (index) => logEvent('🔄 change', `(index: ${index})`));
    scroller.on('reachEnd', () => logEvent('🏁 reachEnd'));

    // Start the animation
    scroller.start();
  </script>
</body>
</html>
```

## Practical Use Cases

### Synchronizing External UI

Update other elements on your page to match the current scrolling text.

```javascript
const scroller = new ScrollingText(container, texts);
const indicator = document.getElementById('step-indicator');

scroller.on('change', (index) => {
  // Update an external step indicator based on the current text
  indicator.textContent = `Step ${index + 1} of ${texts.length}`;
});

scroller.start();
```

### Triggering Analytics on Completion

Fire analytics events when users read through all the items.

```javascript
const scroller = new ScrollingText(container, texts, { loop: false });

scroller.on('reachEnd', () => {
  // Send an analytics event when the user has seen all text
  trackEvent('scrolling_text_completed');
});

scroller.start();
```

## Lifecycle Example

Here is a full lifecycle demonstrating both methods and events interacting together:

```javascript
const container = document.getElementById('container');
const texts = ['One', 'Two', 'Three'];

// Create instance
const scroller = new ScrollingText(container, texts);

// Register lifecycle listeners
scroller.on('start', () => console.log('Lifecycle: Started'));
scroller.on('stop', () => console.log('Lifecycle: Stopped'));
scroller.on('change', (index) => console.log('Lifecycle: Changed to index', index));

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
By separating methods (like `.start()`) from events (like `.on('start')`), you can cleanly separate your scrolling logic from your UI synchronization logic.
:::