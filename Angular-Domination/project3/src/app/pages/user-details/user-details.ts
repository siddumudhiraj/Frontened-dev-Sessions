import { Component, signal } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
    userData:any = signal("");
  constructor(public userservice: UserService, public route: ActivatedRoute){}
  ngOnInit(){
    const data = this.userservice.userList();
    this.route.params.subscribe((params)=>
    {
      console.log(params['id']);
      const filteredData = data.filter((item) => item.id === +params['id']);
      this.userData.set(filteredData[0]);
      
    })
  }
}
