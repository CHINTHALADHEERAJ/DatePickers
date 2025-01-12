import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngualrDatePickerRoutingModule } from './angualr-date-picker-routing.module';
import { AngualrDatePickerComponent } from './angualr-date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AngualrDatePickerComponent,
  ],
  imports: [
    CommonModule,
    AngualrDatePickerRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule
  ],
  exports:[AngualrDatePickerComponent]
  
})
export class AngualrDatePickerModuleEExample { }
