---
sidebar_position: 3
---

# Framework Integration

While the Web Component works natively in browsers, different frameworks have different ways of handling custom elements and their properties.

## React

React sets all props as strings on custom elements by default. Since our component observes attributes, this works for basic configuration.

```tsx
import { register } from 'web-scrolling-text/element';
register();

function App() {
  return (
    <scrolling-text interval="2000" enter-animation="fade">
      <div>React</div>
      <div>Custom Element</div>
    </scrolling-text>
  );
}
```

### TypeScript Support

To avoid the error `Property 'scrolling-text' does not exist on type 'JSX.IntrinsicElements'`, add this declaration:

```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'scrolling-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'interval'?: string | number;
        'animation-duration'?: string | number;
        'enter-animation'?: string;
        'exit-animation'?: string;
        'loop'?: string | boolean;
        'auto-start'?: string | boolean;
      };
    }
  }
}
```
### Alternatively

Add this to your `declaration.d.ts`:
```tsx
import React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'scrolling-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'interval'?: string | number;
                'animation-duration'?: string | number;
                'enter-animation'?: string;
                'exit-animation'?: string;
                'loop'?: string | boolean;
                'auto-start'?: string | boolean;
            };
        }
    }
}
```


## Angular

Angular requires you to explicitly allow custom elements in your module or component schemas.

1.  **Add `CUSTOM_ELEMENTS_SCHEMA`:**

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'web-scrolling-text/element';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Required
  template: `
    <scrolling-text [attr.interval]="interval">
      <div>Angular</div>
      <div>Integration</div>
    </scrolling-text>
  `
})
export class AppComponent {
  interval = 2000;
}
```

## Vue

Vue supports custom elements out of the box but needs to know which tags are custom elements to avoid trying to resolve them as components.

**Vite Configuration (`vite.config.ts`):**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ]
})
```

**Usage:**

```vue
<script setup>
import { register } from 'web-scrolling-text/element';
register();
</script>

<template>
  <scrolling-text :interval="2000">
    <div>Vue</div>
    <div>Wrapperless</div>
  </scrolling-text>
</template>
```

## Svelte

Svelte has native support for custom elements.

```svelte
<script>
  import { register } from 'web-scrolling-text/element';
  register();
</script>

<scrolling-text interval={2000}>
  <div>Svelte</div>
  <div>Works Great</div>
</scrolling-text>
```
