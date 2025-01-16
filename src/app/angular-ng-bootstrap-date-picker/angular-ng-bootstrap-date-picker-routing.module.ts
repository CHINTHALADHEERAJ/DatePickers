import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularNgBootstrapDatePickerComponent } from './angular-ng-bootstrap-date-picker.component';

const routes: Routes = [{ path: '', component: AngularNgBootstrapDatePickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularNgBootstrapDatePickerRoutingModule { }
