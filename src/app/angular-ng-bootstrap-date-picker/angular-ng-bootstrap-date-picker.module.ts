import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AngularNgBootstrapDatePickerRoutingModule } from './angular-ng-bootstrap-date-picker-routing.module';
import { AngularNgBootstrapDatePickerComponent } from './angular-ng-bootstrap-date-picker.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbCalendar,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AngularNgBootstrapDatePickerComponent],
  imports: [
    CommonModule,
    AngularNgBootstrapDatePickerRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [AngularNgBootstrapDatePickerComponent],
})
export class AngularNgBootstrapDatePickerModule {}
