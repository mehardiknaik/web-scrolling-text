---
sidebar_position: 4
---

# Animations

Add beautiful pre-built animation effects to your Angular scrolling text component.

## Available Animations

The library includes these pre-built animation modules:

- **fade** - Smooth fade in/out transition
- **bounce** - Bouncy entrance and exit
- **flip** - 3D flip effect
- **rotate** - Rotation animation
- **scaleIn** - Scale up entrance
- **scaleOut** - Scale down exit
- **hinge** - Hinge-like rotation (exit only)
- **zoomInDown** - Zoom in from top

## Basic Usage

Import animation modules dynamically and apply them to your component:

```typescript title="app.component.ts"
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div #scrollContainer></div>`,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private scroller?: Scrolling;

  async ngAfterViewInit(): Promise<void> {
    // Import fade animation
    const fade = await import('web-scrolling-text/animations/fade');
    
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      ['Beautiful', 'Fade', 'Animation'],
      {
        enterAnimation: fade.enterAnimation,
        exitAnimation: fade.exitAnimation,
        animationDuration: 1000
      }
    );
    this.scroller.start();
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

## Animation Examples

### Fade Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const fade = await import('web-scrolling-text/animations/fade');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Fade', 'In', 'Out'],
    {
      enterAnimation: fade.enterAnimation,
      exitAnimation: fade.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Bounce Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const bounce = await import('web-scrolling-text/animations/bounce');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Bounce', 'Effect'],
    {
      enterAnimation: bounce.enterAnimation,
      exitAnimation: bounce.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Flip Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const flip = await import('web-scrolling-text/animations/flip');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Flip', 'Transition'],
    {
      enterAnimation: flip.enterAnimation,
      exitAnimation: flip.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Rotate Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const rotate = await import('web-scrolling-text/animations/rotate');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Rotate', 'Effect'],
    {
      enterAnimation: rotate.enterAnimation,
      exitAnimation: rotate.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Scale In Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const scaleIn = await import('web-scrolling-text/animations/scaleIn');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Scale', 'In'],
    {
      enterAnimation: scaleIn.enterAnimation,
      exitAnimation: scaleIn.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Scale Out Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const scaleOut = await import('web-scrolling-text/animations/scaleOut');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Scale', 'Out'],
    {
      enterAnimation: scaleOut.enterAnimation,
      exitAnimation: scaleOut.exitAnimation
    }
  );
  this.scroller.start();
}
```

### Hinge Animation

The hinge animation only provides an exit animation:

```typescript
async ngAfterViewInit(): Promise<void> {
  const hinge = await import('web-scrolling-text/animations/hinge');
  const fade = await import('web-scrolling-text/animations/fade');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Hinge', 'Effect'],
    {
      enterAnimation: fade.enterAnimation,  // Use another animation for enter
      exitAnimation: hinge.exitAnimation     // Hinge only for exit
    }
  );
  this.scroller.start();
}
```

### Zoom In Down Animation

```typescript
async ngAfterViewInit(): Promise<void> {
  const zoomInDown = await import('web-scrolling-text/animations/zoomInDown');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Zoom', 'In'],
    {
      enterAnimation: zoomInDown.enterAnimation,
      exitAnimation: zoomInDown.exitAnimation
    }
  );
  this.scroller.start();
}
```

## Mixing Enter and Exit Animations

Use different animations for enter and exit:

```typescript title="app.component.ts"
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div #scrollContainer></div>`,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private scroller?: Scrolling;

  async ngAfterViewInit(): Promise<void> {
    const fade = await import('web-scrolling-text/animations/fade');
    const bounce = await import('web-scrolling-text/animations/bounce');
    
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      ['Fade In', 'Bounce Out', 'Mixed'],
      {
        enterAnimation: fade.enterAnimation,
        exitAnimation: bounce.exitAnimation,
        animationDuration: 1000
      }
    );
    this.scroller.start();
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

## Combining with Custom Options

```typescript title="app.component.ts"
async ngAfterViewInit(): Promise<void> {
  const bounce = await import('web-scrolling-text/animations/bounce');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['Custom', 'Options', 'With', 'Animation'],
    {
      // Animation
      enterAnimation: bounce.enterAnimation,
      exitAnimation: bounce.exitAnimation,
      
      // Timing
      interval: 2500,
      animationDuration: 800,
      
      // Behavior
      loop: true,
      
      // Callbacks
      onChange: (index) => console.log('Changed to:', index)
    }
  );
  this.scroller.start();
}
```

## Dynamic Animation Selector

Create a component that allows users to select animations:

```typescript title="animation-demo.component.ts"
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-animation-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div #scrollContainer class="scroll-area"></div>
      
      <div class="controls">
        <label>Choose Animation:</label>
        <select (change)="changeAnimation($event)" [(ngModel)]="currentAnimation">
          <option value="fade">Fade</option>
          <option value="bounce">Bounce</option>
          <option value="flip">Flip</option>
          <option value="rotate">Rotate</option>
          <option value="scaleIn">Scale In</option>
          <option value="scaleOut">Scale Out</option>
          <option value="zoomInDown">Zoom In Down</option>
        </select>
      </div>
    </div>
  `,
  styles: [`
    .scroll-area {
      font-size: 48px;
      text-align: center;
      margin: 40px;
      min-height: 100px;
    }
    .controls {
      text-align: center;
      margin-top: 20px;
    }
    select {
      padding: 10px;
      font-size: 16px;
      margin-left: 10px;
    }
  `]
})
export class AnimationDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  currentAnimation = 'fade';
  texts = ['Choose', 'Your', 'Animation', 'Style'];
  private scroller?: Scrolling;

  ngAfterViewInit(): void {
    this.initializeScroller(this.currentAnimation);
  }

  async changeAnimation(event: Event): Promise<void> {
    const select = event.target as HTMLSelectElement;
    this.currentAnimation = select.value;
    
    // Dispose old scroller
    this.scroller?.dispose();
    
    // Initialize with new animation
    await this.initializeScroller(this.currentAnimation);
  }

  private async initializeScroller(animationType: string): Promise<void> {
    if (!this.scrollContainer) return;

    const animation = await this.loadAnimation(animationType);
    
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      this.texts,
      {
        enterAnimation: animation.enterAnimation,
        exitAnimation: animation.exitAnimation,
        interval: 2500,
        animationDuration: 1000,
        loop: true
      }
    );
    this.scroller.start();
  }

  private async loadAnimation(type: string) {
    const animations: Record<string, () => Promise<any>> = {
      fade: () => import('web-scrolling-text/animations/fade'),
      bounce: () => import('web-scrolling-text/animations/bounce'),
      flip: () => import('web-scrolling-text/animations/flip'),
      rotate: () => import('web-scrolling-text/animations/rotate'),
      scaleIn: () => import('web-scrolling-text/animations/scaleIn'),
      scaleOut: () => import('web-scrolling-text/animations/scaleOut'),
      zoomInDown: () => import('web-scrolling-text/animations/zoomInDown'),
    };
    
    return (animations[type] || animations.fade)();
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

:::tip Performance
Dynamic imports help reduce the initial bundle size by loading animations only when needed.
:::

:::info Hinge Animation
The hinge animation only provides an `exitAnimation`. Combine it with another animation's `enterAnimation` for the complete effect.
:::
