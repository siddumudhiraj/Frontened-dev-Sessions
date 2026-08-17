import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-html-controlledforms',
  imports: [FormsModule],
  templateUrl: './html-controlledforms.html',
  styleUrl: './html-controlledforms.css',
})
export class HtmlControlledforms {
  userdetails:any=undefined
  adduser(data: NgForm){
    console.log(data);
    this.userdetails = data;
  }
}
