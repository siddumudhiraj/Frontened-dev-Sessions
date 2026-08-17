import { Component } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-groupp',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form-groupp.html',
  styleUrl: './form-groupp.css',
})
export class FormGroupp {
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })

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
