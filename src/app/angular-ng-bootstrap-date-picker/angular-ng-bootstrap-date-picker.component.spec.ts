import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgBootstrapDatePickerComponent } from './angular-ng-bootstrap-date-picker.component';

describe('AngularNgBootstrapDatePickerComponent', () => {
  let component: AngularNgBootstrapDatePickerComponent;
  let fixture: ComponentFixture<AngularNgBootstrapDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularNgBootstrapDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularNgBootstrapDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
