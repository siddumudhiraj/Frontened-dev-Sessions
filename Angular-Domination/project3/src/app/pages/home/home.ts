import { Component, signal } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public router: Router){}
  // profilefun(){
    //   this.router.navigate(['profile'])
    // }
    userData = signal({id: 1, name: 'siddu', age: 23});
    userData1 = signal({id: 2, name: 'shiva', age: 20});

    gotosidduprofile(){
      this.router.navigate(['profile'], {
        queryParams: {
          id: 10, name: 'lokesh', age: 34
        }
      })
    }

    aboutpage(){
      this.router.navigate(['about', 'siddu', 20]);
    }
  }
