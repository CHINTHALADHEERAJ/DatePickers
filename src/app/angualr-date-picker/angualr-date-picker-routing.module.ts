import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngualrDatePickerComponent } from './angualr-date-picker.component';

const routes: Routes = [{ path: '', component: AngualrDatePickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngualrDatePickerRoutingModule { }
