import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild("container", {read: ViewContainerRef})
  container !: ViewContainerRef
   async userDetails(){
    this.container.clear();
    console.log("hello");
    const {UserDetails} = await import('./user-details/user-details')
    this.container.createComponent(UserDetails)
  }
}
