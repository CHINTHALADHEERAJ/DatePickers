import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-angular-ng-bootstrap-date-picker',
  standalone: false,

  templateUrl: './angular-ng-bootstrap-date-picker.component.html',
  styleUrl: './angular-ng-bootstrap-date-picker.component.scss',
})
export class AngularNgBootstrapDatePickerComponent {
  ngDatePickerFrom!: FormGroup;
  today = inject(NgbCalendar).getToday();
  model: NgbDateStruct | null = null;

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'hidden';
  placement = 'top';

  constructor(
    private fb: FormBuilder,
    private config: NgbInputDatepickerConfig,
    private calendar: NgbCalendar
  ) {
    this.ngDatePickerFrom = fb.group({
      datePicker: [''],
    });
  }
  isDisabled = (date: NgbDate, current: { month: number; year: number }) =>
    date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;
  ngOnInit() {
    // customize default values of datepickers used by this component tree
    var currentDate = new Date();
    this.config.minDate = { year: 1900, month: 1, day: 1 };
    this.config.maxDate = {
      year: currentDate.getFullYear(),
      month: 12,
      day: 31,
    };
    // days that don't belong to current month are not visible
    //  this.config.outsideDays = 'hidden';
    // weekends are disabled
    this.config.markDisabled = (date: NgbDateStruct) => {
      const weekday = this.calendar.getWeekday(
        new NgbDate(date.year, date.month, date.day)
      );
      return weekday >= 6; // Disable weekends
    };

    // setting datepicker popup to close only on click outside
    //  this.config.autoClose = 'outside';

    // setting datepicker popup to open above the input
    //  this.config.placement = ['top-start', 'top-end'];
  }
  clear() {
    this.ngDatePickerFrom.reset();
  }
}
