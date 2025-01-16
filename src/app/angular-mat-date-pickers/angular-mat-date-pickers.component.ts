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
  fromDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  toDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  clear()
  {
   this.angularMatDatePicker.reset()
  }
}
