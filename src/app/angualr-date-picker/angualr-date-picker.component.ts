import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-angualr-date-picker',
  standalone: false,
  
  templateUrl: './angualr-date-picker.component.html',
  styleUrl: './angualr-date-picker.component.scss'
})
export class AngualrDatePickerComponent {
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
