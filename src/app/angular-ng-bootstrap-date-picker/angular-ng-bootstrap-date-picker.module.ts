import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularNgBootstrapDatePickerRoutingModule } from './angular-ng-bootstrap-date-picker-routing.module';
import { AngularNgBootstrapDatePickerComponent } from './angular-ng-bootstrap-date-picker.component';


@NgModule({
  declarations: [
    AngularNgBootstrapDatePickerComponent
  ],
  imports: [
    CommonModule,
    AngularNgBootstrapDatePickerRoutingModule
  ],
  exports:[AngularNgBootstrapDatePickerComponent]
})
export class AngularNgBootstrapDatePickerModule { }
