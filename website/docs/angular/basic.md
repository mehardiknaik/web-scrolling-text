---
sidebar_position: 1
---

# Basic Usage

Learn how to integrate web-scrolling-text into your Angular application.

## Installation

Install the package using npm or yarn:

```bash npm2yarn
npm install web-scrolling-text
```

## Quick Start

### 1. Create Component

Generate a scrolling text component:

```bash
ng generate component scrolling-text
```

### 2. Component Implementation

**scrolling-text.component.ts**

```typescript
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import Scrolling from 'web-scrolling-text';
import type { OptionsType } from 'web-scrolling-text';

@Component({
  selector: 'app-scrolling-text',
  standalone: true,
  templateUrl: './scrolling-text.component.html',
})
export class ScrollingTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @Input() texts: string[] = [];
  @Input() options?: OptionsType;
  
  private scroller?: Scrolling;

  ngAfterViewInit(): void {
    if (this.scrollContainer) {
      this.scroller = new Scrolling(
        this.scrollContainer.nativeElement,
        this.texts,
        this.options
      );
      this.scroller.start();
    }
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

**scrolling-text.component.html**

```html
<div #scrollContainer></div>
```

### 3. Use in Your App

**app.component.ts**

```typescript
import { Component } from '@angular/core';
import { ScrollingTextComponent } from './scrolling-text/scrolling-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollingTextComponent],
  template: `
    <div class="container">
      <h1>Angular Scrolling Text</h1>
      <app-scrolling-text [texts]="texts"></app-scrolling-text>
    </div>
  `,
})
export class AppComponent {
  texts = ['Hello', 'World', 'Welcome', 'to', 'Angular'];
}
```

## Using with Options

Pass custom options to configure the animation:

```typescript
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
  texts = ['Fast', 'Custom', 'Animation'];
  
  options: OptionsType = {
    interval: 2000,
    animationDuration: 800,
    loop: true,
  };
}
```

## Server-Side Rendering (SSR)

For Angular Universal, ensure the component only initializes in the browser:

```typescript
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-scrolling-text',
  standalone: true,
  templateUrl: './scrolling-text.component.html',
})
export class ScrollingTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private scroller?: Scrolling;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only run in browser
    if (isPlatformBrowser(this.platformId) && this.scrollContainer) {
      this.scroller = new Scrolling(
        this.scrollContainer.nativeElement,
        ['Hello', 'World'],
        {}
      );
      this.scroller.start();
    }
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

:::tip
The component automatically starts the animation when `ngAfterViewInit` is called. Make sure to dispose of the scroller in `ngOnDestroy` to prevent memory leaks.
:::

## Next Steps

- [Configuration options](./options.md)
- [Control methods](./controls.md)
- [Animations](./animations.md)
