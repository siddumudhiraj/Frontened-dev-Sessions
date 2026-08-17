import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() userNames!:string
  @Output() selectedUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();
  


  whichUser(name: string){
    this.selectedUser.emit(name);
  }
  delete(name: string){
   this.deleteUser.emit(name); 
  }
  
}
