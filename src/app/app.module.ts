import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AngularMatDatePickersModule } from "./angular-mat-date-pickers/angular-mat-date-pickers.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularNgBootstrapDatePickerModule } from "./angular-ng-bootstrap-date-picker/angular-ng-bootstrap-date-picker.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    AngularMatDatePickersModule,
    NgbModule,
    AngularNgBootstrapDatePickerModule
],
  providers: [
    MatFormFieldModule,
    MatDatepickerModule,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
