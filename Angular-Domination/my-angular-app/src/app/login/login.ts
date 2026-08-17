import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  display(){
    console.log("function called");
    this.display2();
  }
  display2(){
    console.log("another fuction called");
  }
}
