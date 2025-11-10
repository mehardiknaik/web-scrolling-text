---
sidebar_position: 2
---

# Configuration Options

All available configuration options for the ScrollingText component.

## Options Prop

Pass options to the component via the `options` input:

```typescript
<app-scrolling-text 
  [texts]="texts" 
  [options]="options">
</app-scrolling-text>
```

## Available Options

### interval

Time in milliseconds between each text change.

- **Type:** `number`
- **Default:** `3000` (3 seconds)

```typescript
const options: OptionsType = {
  interval: 5000  // Wait 5 seconds between each text
};
```

### animationDuration

Duration of the enter/exit animation in milliseconds.

- **Type:** `number`
- **Default:** `1000` (1 second)

```typescript
const options: OptionsType = {
  animationDuration: 500  // Fast 500ms animations
};
```

### enterAnimation

Custom CSS animation class name for text entering.

- **Type:** `string`
- **Default:** Built-in animation

```typescript
const options: OptionsType = {
  enterAnimation: 'myEnterAnimation'
};
```

### exitAnimation

Custom CSS animation class name for text exiting.

- **Type:** `string`
- **Default:** Built-in animation

```typescript
const options: OptionsType = {
  exitAnimation: 'myExitAnimation'
};
```

### loop

Whether to loop back to the first text after reaching the end.

- **Type:** `boolean`
- **Default:** `true`

```typescript
const options: OptionsType = {
  loop: false  // Stop at the last text
};
```

## Callback Options

### onStart

Called when the animation starts.

- **Type:** `() => void`

```typescript
const options: OptionsType = {
  onStart: () => {
    console.log('Animation started!');
  }
};
```

### onStop

Called when the animation stops.

- **Type:** `() => void`

```typescript
const options: OptionsType = {
  onStop: () => {
    console.log('Animation stopped!');
  }
};
```

### onChange

Called when the text changes. Receives the current index.

- **Type:** `(index: number) => void`

```typescript
const options: OptionsType = {
  onChange: (index: number) => {
    console.log(`Now showing text at index: ${index}`);
  }
};
```

### onReachEnd

Called when reaching the last text.

- **Type:** `() => void`

```typescript
const options: OptionsType = {
  loop: false,
  onReachEnd: () => {
    console.log('Reached the end!');
  }
};
```

## Complete Example

```typescript title="app.component.ts"
import { Component } from '@angular/core';
import { ScrollingTextComponent } from './scrolling-text/scrolling-text.component';
import type { OptionsType } from 'web-scrolling-text';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollingTextComponent],
  template: `
    <app-scrolling-text 
      [texts]="texts" 
      [options]="options">
    </app-scrolling-text>
  `,
})
export class AppComponent {
  texts = ['First', 'Second', 'Third', 'Fourth'];
  
  options: OptionsType = {
    // Timing
    interval: 2500,
    animationDuration: 800,
    
    // Behavior
    loop: true,
    
    // Callbacks
    onStart: () => console.log('Started'),
    onStop: () => console.log('Stopped'),
    onChange: (index: number) => console.log('Index:', index),
    onReachEnd: () => console.log('Reached end')
  };
}
```

## Using Pre-built Animations

You can use pre-built animation modules:

```typescript
import { Component } from '@angular/core';
import type { OptionsType } from 'web-scrolling-text';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollingTextComponent],
  template: `
    <app-scrolling-text 
      [texts]="texts" 
      [options]="options">
    </app-scrolling-text>
  `,
})
export class AppComponent {
  texts = ['Beautiful', 'Fade', 'Animation'];
  
  async ngOnInit() {
    const fade = await import('web-scrolling-text/animations/fade');
    this.options = {
      enterAnimation: fade.enterAnimation,
      exitAnimation: fade.exitAnimation,
      animationDuration: 1000
    };
  }
}
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
| `onChange`          | `function` | -       | Callback when text changes        |
| `onReachEnd`        | `function` | -       | Callback when reaching last text  |
