import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngualrDatePickerComponent } from './angualr-date-picker.component';

describe('AngualrDatePickerComponent', () => {
  let component: AngualrDatePickerComponent;
  let fixture: ComponentFixture<AngualrDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngualrDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngualrDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
