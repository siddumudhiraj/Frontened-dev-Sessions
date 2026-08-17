import { Component, signal } from '@angular/core';
import { UserServices } from '../../services/user-services';
import { datatypes } from '../../services/user-data-types';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  constructor(private userservice: UserServices, private router: Router) {
  }
  userData = signal<datatypes[] | undefined>(undefined);

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.userservice.getusers().subscribe((data) => {
      console.log(data);
      this.userData.set(data);
    })

  }
  deleteuser(id: number | undefined) {
    this.userservice.deleteuser(id).subscribe((resp)=>{
      if(resp){
        this.getusers();
      }
    })
  }

  edituser(id: Number| undefined){
    this.router.navigate([`edit/${id}`])
    // console.log(id);
    
  }

}
