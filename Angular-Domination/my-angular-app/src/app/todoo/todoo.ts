import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todoo',
  imports: [],
  templateUrl: './todoo.html',
  styleUrl: './todoo.css',
})
export class Todoo {
tasks = signal([
   {id:0, title:"Lunch at Office", status:false}
])
newTask = signal('')
AddTask(){
  if(this.newTask()){

    this.tasks.update((data)=>([...data, {id:this.tasks().length, title: this.newTask(), status:false}]))
    this.newTask.set('')
  }
}
deleteTask(id: number){
  this.tasks.update((tasks)=>tasks.filter((task)=> task.id!=id))
}
}
