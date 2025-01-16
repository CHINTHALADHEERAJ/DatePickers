import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'AngularMatDatePickers', loadChildren: () => import('./angular-mat-date-pickers/angular-mat-date-pickers.module').then(m => m.AngularMatDatePickersModule) }, { path: 'AngularNgBootstrapDatePicker', loadChildren: () => import('./angular-ng-bootstrap-date-picker/angular-ng-bootstrap-date-picker.module').then(m => m.AngularNgBootstrapDatePickerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
