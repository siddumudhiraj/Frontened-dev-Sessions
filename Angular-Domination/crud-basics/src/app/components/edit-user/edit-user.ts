import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../../services/user-services';
import { ActivatedRoute, Router } from '@angular/router';
import { validate } from '@angular/forms/signals';


@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  private fb = inject(FormBuilder);
  private userservice = inject(UserServices);
  private route = inject(Router);
  constructor(private activatedroute: ActivatedRoute){}
  
  userform = this.fb.group({
    name: ['', Validators.required],
    age:['', Validators.required],
    email:['',[ Validators.required, Validators.email]]
  });

  ngOnInit(){
    let id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.userservice.getuser(id).subscribe((data)=>{
        console.log(data);
        this.userform.patchValue({
          name: data.name,
          age: data.age.toString(),
          email: data.email
        })
        
      })
    }
    
  }
  edituser(){
    const formvalue = this.userform.getRawValue();
    let id = this.activatedroute.snapshot.paramMap.get('id');
    
    if(formvalue && id){
      const data={
        name: formvalue.name!,
        email: formvalue.email!,
        age: Number(formvalue.age)
      };
       this.userservice.updateuser(data, id).subscribe((item)=>{
        this.route.navigate(['/']);
       })
    }
  }
}

