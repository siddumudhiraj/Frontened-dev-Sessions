import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Displaycount } from './displaycount/displaycount';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [Displaycount, ControlCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project2');

}
