import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import Scrolling from 'web-scrolling-text';
// import plugin from 'web-scrolling-text/modules/fade';

@Component({
  selector: 'app-scrolling-text',
  imports: [],
  templateUrl: './scrolling-text.component.html',
  styleUrl: './scrolling-text.component.css',
})
export class ScrollingTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild('element') element: ElementRef | undefined;
  scroller: Scrolling | undefined;

  ngAfterViewInit(): void {
    if (this.element && typeof document !== 'undefined') {
      this.scroller = new Scrolling(
        this.element.nativeElement,
        ['Hello', 'How Are You'],
        {
          onStop: () => console.log('onStop'),
          onStart: () => console.log('onStart'),
          onChange: (index) => console.log('onChange', index),
          onReachEnd: () => console.log('onReachEnd'),
        }
      );
      this.scroller.start();
    }
  }
  ngOnDestroy(): void {
    if (this.scroller) {
      this.scroller.dispose();
    }
  }
}
