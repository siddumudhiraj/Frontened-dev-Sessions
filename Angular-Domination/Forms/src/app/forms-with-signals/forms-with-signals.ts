import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField } from "@angular/forms/signals";

@Component({
  selector: 'app-forms-with-signals',
  imports: [CommonModule, FormField],
  templateUrl: './forms-with-signals.html',
  styleUrl: './forms-with-signals.css',
})
export class FormsWithSignals {
  logindetails = signal({
    email:(""),
    password:("")
  })
  loginForm = form(this.logindetails)
  login(){
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());
    
  }
  reset(){
    this.logindetails.set({
      email:"",
      password:""
    })
  }
}
