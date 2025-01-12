import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'AngularMatDatePickers', loadChildren: () => import('./angular-mat-date-pickers/angular-mat-date-pickers.module').then(m => m.AngularMatDatePickersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
