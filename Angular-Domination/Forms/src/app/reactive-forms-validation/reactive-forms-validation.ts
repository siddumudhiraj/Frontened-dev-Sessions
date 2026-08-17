import { Component } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms-validation',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './reactive-forms-validation.html',
  styleUrl: './reactive-forms-validation.css',
})
export class ReactiveFormsValidation {
    loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),

  })
  get name(){
    return this.loginForm.get("name");
  }
  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }


  handleProfile(){
    console.log(this.loginForm.value);
    
  }
  reset(){
    this.loginForm.setValue({
      name:(""),
      email:(""),
      password:("")
    })
  }
}
