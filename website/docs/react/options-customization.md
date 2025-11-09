---
sidebar_position: 2
---

# Options & Customization

Configure the ScrollingText component to match your needs with these customization options.

## Options Prop

Pass an `options` object to the `ScrollingText` component:

```tsx
<ScrollingText options={{ interval: 2000 }}>
  {/* Your children */}
</ScrollingText>
```

## Available Options

### interval

Time in milliseconds between each text change.

- **Type:** `number`
- **Default:** `3000` (3 seconds)

```tsx
<ScrollingText options={{ interval: 5000 }}>
  <div>Slow</div>
  <div>Transition</div>
</ScrollingText>
```

### animationDuration

Duration of the enter/exit animation in milliseconds.

- **Type:** `number`
- **Default:** `1000` (1 second)

```tsx
<ScrollingText options={{ animationDuration: 500 }}>
  <div>Quick</div>
  <div>Animation</div>
</ScrollingText>
```

### enterAnimation

Custom CSS animation class name for text entering.

- **Type:** `string`
- **Default:** Built-in animation

```tsx
<ScrollingText 
  options={{ 
    enterAnimation: 'myEnterAnimation' 
  }}
>
  <div>Custom</div>
  <div>Enter</div>
</ScrollingText>
```

### exitAnimation

Custom CSS animation class name for text exiting.

- **Type:** `string`
- **Default:** Built-in animation

```tsx
<ScrollingText 
  options={{ 
    exitAnimation: 'myExitAnimation' 
  }}
>
  <div>Custom</div>
  <div>Exit</div>
</ScrollingText>
```

### loop

Whether to loop back to the first text after reaching the end.

- **Type:** `boolean`
- **Default:** `true`

```tsx
<ScrollingText options={{ loop: false }}>
  <div>One</div>
  <div>Two</div>
  <div>Stop here</div>
</ScrollingText>
```

## Callback Options

### onStart

Called when the animation starts.

- **Type:** `() => void`

```tsx
<ScrollingText 
  options={{ 
    onStart: () => console.log('Started!') 
  }}
>
  <div>Hello</div>
  <div>World</div>
</ScrollingText>
```

### onStop

Called when the animation stops.

- **Type:** `() => void`

```tsx
<ScrollingText 
  options={{ 
    onStop: () => console.log('Stopped!') 
  }}
>
  <div>Hello</div>
  <div>World</div>
</ScrollingText>
```

### onChange

Called when the text changes. Receives the current index.

- **Type:** `(index: number) => void`

```tsx
<ScrollingText 
  options={{ 
    onChange: (index) => console.log(`Index: ${index}`) 
  }}
>
  <div>Hello</div>
  <div>World</div>
</ScrollingText>
```

### onReachEnd

Called when reaching the last text.

- **Type:** `() => void`

```tsx
<ScrollingText 
  options={{ 
    loop: false,
    onReachEnd: () => console.log('Reached the end!') 
  }}
>
  <div>First</div>
  <div>Second</div>
  <div>Last</div>
</ScrollingText>
```

## Complete Example

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import styles from "./App.module.css";

function App() {
  const handleChange = (index: number) => {
    console.log(`Now showing item ${index}`);
  };

  return (
    <ScrollingText
      options={{
        // Timing
        interval: 2500,
        animationDuration: 800,
        
        // Animations
        enterAnimation: styles.fadeIn,
        exitAnimation: styles.fadeOut,
        
        // Behavior
        loop: true,
        
        // Callbacks
        onStart: () => console.log('Animation started'),
        onStop: () => console.log('Animation stopped'),
        onChange: handleChange,
        onReachEnd: () => console.log('Reached the end')
      }}
    >
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </ScrollingText>
  );
}

export default App;
```

```css title="App.module.css"
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.fadeIn {
  animation: fadeIn var(--duration) ease-out;
}

.fadeOut {
  animation: fadeOut var(--duration) ease-in;
}
```

## Using Pre-built Animations

Instead of creating custom animations, you can use the pre-built animation modules:

```tsx title="App.tsx"
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={{ ...fade }}>
      <div>Beautiful</div>
      <div>Fade</div>
      <div>Animation</div>
    </ScrollingText>
  );
}

export default App;
```

:::tip
Check out the [Animations documentation](./animations.md) for all available pre-built animations.
:::

## Options Reference Table

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
