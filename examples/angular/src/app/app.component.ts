import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingTextComponent } from './scrolling-text/scrolling-text.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollingTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
}
