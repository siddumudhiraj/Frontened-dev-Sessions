import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  Counter: WritableSignal<number> = signal<number>(0);
  increment(){
    this.Counter.update((val) => val+1);
  }
  decrement(){
    if(this.Counter() > 0){
      this.Counter.update((val) => val-1);
    }
  }
  reset(){
    this.Counter.set(0);
  }
}
