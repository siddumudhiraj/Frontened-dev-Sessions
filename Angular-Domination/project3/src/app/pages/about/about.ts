import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public route: ActivatedRoute){}
  userNamee = signal('');
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      // console.log(params);
      this.userNamee.set(params['name']);
      
    })
  }
}
