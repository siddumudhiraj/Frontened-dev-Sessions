import { Component, signal } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userData:any = signal("");
  constructor(public userservice: UserService){}
  ngOnInit(){
    const data = this.userservice.userList();
    this.userData.set(data);
  }
}
 