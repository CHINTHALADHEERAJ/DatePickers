import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMatDatePickersComponent } from './angular-mat-date-pickers.component';

const routes: Routes = [{ path: '', component: AngularMatDatePickersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMatDatePickersRoutingModule { }
