import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { FormGroupp } from './form-groupp/form-groupp';
import { ReactiveFormsValidation } from './reactive-forms-validation/reactive-forms-validation';
import { FormsWithSignals } from './forms-with-signals/forms-with-signals';
import { HtmlControlledforms } from './html-controlledforms/html-controlledforms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveForms, FormGroupp, ReactiveFormsValidation, FormsWithSignals, HtmlControlledforms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
