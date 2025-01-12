import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-angualr-date-picker',
  standalone: false,

  templateUrl: './angualr-date-picker.component.html',
  styleUrl: './angualr-date-picker.component.scss'
})
export class AngualrDatePickerComponent {
  minDate: any
  maxDate: any
  angularMatDatePicker!: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.angularMatDatePicker = formbuilder.group({
      formDate: [""],
      toDate: [""]
    })
  }
  fromDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.

    this.minDate = new Date()

    return day !== 0 && day !== 6;



  };
  toDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.


    return day !== 0 && day !== 6;



  };
  clear() {
    this.angularMatDatePicker.reset()
  }
}
