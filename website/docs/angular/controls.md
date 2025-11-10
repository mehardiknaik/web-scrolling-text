---
sidebar_position: 3
---

# Control Methods

Control your scrolling text programmatically with the available instance methods.

## Available Methods

### start()

Starts the scrolling text animation.

```typescript
this.scroller?.start();
```

:::info
The animation won't begin until you call `start()`. This gives you control over when to begin the animation.
:::

### pause()

Pauses the animation at the current text without resetting.

```typescript
this.scroller?.pause();
```

Call `start()` again to resume from where it was paused.

### stop()

Stops the animation and resets to the first text.

```typescript
this.scroller?.stop();
```

### dispose()

Completely cleans up the scrolling text instance and removes all DOM elements.

```typescript
this.scroller?.dispose();
```

:::warning
After calling `dispose()`, the instance cannot be reused. You'll need to create a new instance if you want to use scrolling text again.
:::

## Interactive Example

```typescript title="app.component.ts"
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div #scrollContainer class="scroll-area"></div>
      
      <div class="controls">
        <button (click)="handleStart()">▶️ Start</button>
        <button (click)="handlePause()">⏸️ Pause</button>
        <button (click)="handleStop()">⏹️ Stop</button>
      </div>
    </div>
  `,
  styles: [`
    .scroll-area {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      margin: 40px;
      min-height: 100px;
    }
    .controls {
      text-align: center;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  private scroller?: Scrolling;
  texts = ['Hello', 'World', 'Control', 'Methods', 'Demo'];

  ngAfterViewInit(): void {
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      this.texts,
      {
        interval: 2000,
        animationDuration: 600
      }
    );
  }

  handleStart(): void {
    this.scroller?.start();
    console.log('Animation started');
  }

  handlePause(): void {
    this.scroller?.pause();
    console.log('Animation paused');
  }

  handleStop(): void {
    this.scroller?.stop();
    console.log('Animation stopped and reset');
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

## Practical Use Cases

### Auto-start after delay

```typescript
ngAfterViewInit(): void {
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    this.texts
  );

  // Start after 2 seconds
  setTimeout(() => {
    this.scroller?.start();
  }, 2000);
}
```

### Pause on hover

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolling-text',
  template: `<div #scrollContainer (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()"></div>`,
})
export class ScrollingTextComponent {
  private scroller?: Scrolling;

  ngAfterViewInit(): void {
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      this.texts
    );
    this.scroller.start();
  }

  onMouseEnter(): void {
    this.scroller?.pause();
  }

  onMouseLeave(): void {
    this.scroller?.start();
  }
}
```

### Play/Pause Toggle

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-scrolling',
  standalone: true,
  template: `
    <div>
      <div #scrollContainer></div>
      <button (click)="toggle()">
        {{ isPlaying ? '⏸️ Pause' : '▶️ Play' }}
      </button>
    </div>
  `,
})
export class ToggleScrollingComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  isPlaying = false;
  private scroller?: Scrolling;
  texts = ['Toggle', 'Controls', 'Example'];

  ngAfterViewInit(): void {
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      this.texts
    );
  }

  toggle(): void {
    if (this.isPlaying) {
      this.scroller?.pause();
    } else {
      this.scroller?.start();
    }
    this.isPlaying = !this.isPlaying;
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

### Keyboard Controls

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-keyboard-controls',
  standalone: true,
  template: `
    <div>
      <div #scrollContainer></div>
      <p>Press Space to play/pause, R to reset</p>
    </div>
  `,
})
export class KeyboardControlsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  private scroller?: Scrolling;
  private isPlaying = false;
  texts = ['Keyboard', 'Controls', 'Demo'];

  ngAfterViewInit(): void {
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      this.texts
    );
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      event.preventDefault();
      this.isPlaying ? this.scroller?.pause() : this.scroller?.start();
      this.isPlaying = !this.isPlaying;
    } else if (event.code === 'KeyR') {
      event.preventDefault();
      this.scroller?.stop();
      this.isPlaying = false;
    }
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}
```

## Lifecycle Example

```typescript
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Scrolling from 'web-scrolling-text';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  templateUrl: './lifecycle-demo.component.html',
})
export class LifecycleDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private scroller?: Scrolling;

  ngAfterViewInit(): void {
    // Create instance
    this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      ['One', 'Two', 'Three'],
      {
        onStart: () => console.log('Lifecycle: Started'),
        onStop: () => console.log('Lifecycle: Stopped'),
        onChange: (index) => console.log('Lifecycle: Changed to index', index)
      }
    );

    // Start animation
    this.scroller.start();  // Logs: "Lifecycle: Started"

    // Later... pause it
    setTimeout(() => {
      this.scroller?.pause();
      console.log('Lifecycle: Paused');
    }, 5000);

    // Resume after another delay
    setTimeout(() => {
      this.scroller?.start();
    }, 8000);

    // Stop and reset
    setTimeout(() => {
      this.scroller?.stop();  // Logs: "Lifecycle: Stopped"
    }, 12000);
  }

  ngOnDestroy(): void {
    // Clean up
    this.scroller?.dispose();
    console.log('Lifecycle: Disposed');
  }
}
```

:::tip
Always call `dispose()` in `ngOnDestroy()` to free up memory and remove event listeners. This prevents memory leaks in your Angular application.
:::
