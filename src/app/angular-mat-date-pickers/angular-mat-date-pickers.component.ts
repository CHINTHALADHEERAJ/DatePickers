import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-angular-mat-date-pickers',
  standalone: false,
  
  templateUrl: './angular-mat-date-pickers.component.html',
  styleUrl: './angular-mat-date-pickers.component.scss'
})
export class AngularMatDatePickersComponent {
  angularMatDatePicker!:FormGroup
  constructor(private formbuilder :FormBuilder)
  {
  this.angularMatDatePicker= formbuilder.group({
     formDate:[""],
     toDate:[""]
    })
  }
 
  clear()
  {
   this.angularMatDatePicker.reset()
  }
}
