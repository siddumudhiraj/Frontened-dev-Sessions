import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-project2',
  imports: [],
  standalone: true,
  templateUrl: './project2.html',
  styleUrl: './project2.css',
})
export class Project2 {
  // name: WritableSignal<string> = signal('');
  // reset(){
  //   this.name.set('');
  // }
  // setValue(val: string){
  //   this.name.set(val);
  // }
  isLogin = signal(false);
  login(val: boolean){
    this.isLogin.set(val);
  }
  show = signal(true);

  status = signal('');
  handleStatus(event: Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
