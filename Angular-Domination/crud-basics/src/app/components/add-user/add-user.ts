import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../../services/user-services';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  private fb = inject(FormBuilder);
  private userservice = inject(UserServices);
  private route = inject(Router);
  
  userform = this.fb.group({
    name: ['', Validators.required],
    age:['', Validators.required],
    email:['',[ Validators.required, Validators.email]]
  });

  adduser(){
    if(this.userform.invalid){
      this.userform.markAllAsTouched();
      return;
    }

    const formvalue = this.userform.getRawValue();

    const user={
      name: formvalue.name!,
      email: formvalue.email!,
      age: Number(formvalue.age)
    };

    this.userservice.Addusers(user).subscribe({
      next: ()=>{
        this.route.navigate(['/']);
      }, error: (error)=>{
        console.log('Failed to add user:', error);
        
      }
    });
  }
}
