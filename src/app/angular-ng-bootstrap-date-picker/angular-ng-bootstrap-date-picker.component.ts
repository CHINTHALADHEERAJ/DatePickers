import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-angular-ng-bootstrap-date-picker',
  standalone: false,
  
  templateUrl: './angular-ng-bootstrap-date-picker.component.html',
  styleUrl: './angular-ng-bootstrap-date-picker.component.scss'
})
export class AngularNgBootstrapDatePickerComponent {
  ngDatePickerFrom! : FormGroup
  today = inject(NgbCalendar).getToday();
  model: NgbDateStruct | null = null;
  
  displayMonths = 1;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'hidden';
  placement="top";
 constructor(private fb:FormBuilder)
 {
  this.ngDatePickerFrom =  fb.group({
     datePicker:[""]
   })
 }
 clear()
 {
   this.ngDatePickerFrom.reset();
 }
}
