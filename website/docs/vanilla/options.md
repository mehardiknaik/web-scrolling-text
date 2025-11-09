---
sidebar_position: 2
---

# Configuration Options

All available configuration options for the ScrollingText instance.

## Options Object

The third parameter of the `ScrollingText` constructor accepts an options object:

```javascript
const scroller = new ScrollingText(container, texts, {
  // Your options here
});
```

## Available Options

### interval

Time in milliseconds between each text change.

- **Type:** `number`
- **Default:** `3000` (3 seconds)
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  interval: 5000  // Wait 5 seconds between each text
});
```

### animationDuration

Duration of the enter/exit animation in milliseconds.

- **Type:** `number`
- **Default:** `1000` (1 second)
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  animationDuration: 500  // Fast 500ms animations
});
```

### enterAnimation

Custom CSS animation name for text entering the screen.

- **Type:** `string`
- **Default:** Built-in animation
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  enterAnimation: 'myCustomEnterAnimation'
});
```

### exitAnimation

Custom CSS animation name for text exiting the screen.

- **Type:** `string`
- **Default:** Built-in animation
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  exitAnimation: 'myCustomExitAnimation'
});
```

### loop

Whether to loop back to the first text after reaching the end.

- **Type:** `boolean`
- **Default:** `true`
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  loop: false  // Stop at the last text
});
```

## Callback Options

### onStart

Callback function executed when the animation starts.

- **Type:** `() => void`
- **Default:** `undefined`
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  onStart: () => {
    console.log('Animation started!');
  }
});
```

### onStop

Callback function executed when the animation stops.

- **Type:** `() => void`
- **Default:** `undefined`
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  onStop: () => {
    console.log('Animation stopped!');
  }
});
```

### onChange

Callback function executed when the text changes. Receives the current index as a parameter.

- **Type:** `(index: number) => void`
- **Default:** `undefined`
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  onChange: (index) => {
    console.log(`Now showing text at index: ${index}`);
  }
});
```

### onReachEnd

Callback function executed when reaching the last text.

- **Type:** `() => void`
- **Default:** `undefined`
- **Required:** No

```javascript
const scroller = new ScrollingText(container, texts, {
  loop: false,
  onReachEnd: () => {
    console.log('Reached the end!');
  }
});
```

## Complete Example

```javascript
const container = document.getElementById('my-container');
const texts = ['First', 'Second', 'Third', 'Fourth'];

const scroller = new ScrollingText(container, texts, {
  // Timing options
  interval: 2500,
  animationDuration: 800,
  
  // Animation options
  enterAnimation: 'customEnter',
  exitAnimation: 'customExit',
  
  // Behavior options
  loop: true,
  
  // Callbacks
  onStart: () => console.log('Started'),
  onStop: () => console.log('Stopped'),
  onChange: (index) => console.log('Index:', index),
  onReachEnd: () => console.log('Reached end')
});

scroller.start();
```

:::tip
Combine multiple options to create exactly the behavior you need. All options are optional with sensible defaults.
:::
