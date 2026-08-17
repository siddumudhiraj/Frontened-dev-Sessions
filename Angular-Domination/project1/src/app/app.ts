import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // userName = signal('');
  // userData = signal({
  //   name: "siddu",
  //   college: "sri Indhu"
  // })

  // get name(){
  //   return this.userName();
  // }
  // set name(val){
  //   this.userName.set(val);
  // }

  // get Data(){
  //   return this.userData().college;
  // }
  // set Data(val){
  //   this.userData.update((item)=>({...item, college: val}))
  // }

  users = signal(['sam', 'peter', 'siddu']);
  newUser = signal('');
  AddUser() {
    if (this.newUser()) {
      this.users.update((data) => [...data, this.newUser()]);
      this.newUser.set('');
    }
  }
  selectUserName = signal('');

  selectedUser(name: string) {
    this.selectUserName.set(name);
  }
  deleteUser(name: string) {
    console.log(name);
    this.users.update((data)=> data.filter((item)=> item!= name))
  }
}
