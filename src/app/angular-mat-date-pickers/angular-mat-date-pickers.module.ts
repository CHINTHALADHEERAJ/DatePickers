import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMatDatePickersRoutingModule } from './angular-mat-date-pickers-routing.module';
import { AngularMatDatePickersComponent } from './angular-mat-date-pickers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AngularMatDatePickersComponent
  ],
  imports: [
    CommonModule,
    AngularMatDatePickersRoutingModule,
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
  exports:[AngularMatDatePickersComponent]
})
export class AngularMatDatePickersModule { }
