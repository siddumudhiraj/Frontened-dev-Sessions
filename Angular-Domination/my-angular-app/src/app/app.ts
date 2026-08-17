import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Home } from './home/home';
import { Custom } from './custom/custom';
import { CounterApp } from './counter-app/counter-app';
import { Project2 } from './project2/project2';
import { Todoo } from './todoo/todoo';

@Component({
  selector: 'app-root',
  imports: [Project2, Todoo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  eventHandler(event: string){
    console.log(event);
  }
  isDisabled = false;
  toggle(){
    this.isDisabled = !this.isDisabled;
}
  url = "https://www.esenceweb.com/backend/uploads/angular-framework-tutorial-for-absolute-beginners.png"
  boxwidth = 300;
  boxheight = 200;
  placeholderText = "Enter your name";
}

