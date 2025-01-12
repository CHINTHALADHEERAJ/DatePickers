import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'AngualrDatePicker', loadChildren: () => import('./angualr-date-picker/angualr-date-picker.module').then(m => m.AngualrDatePickerModuleEExample) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
