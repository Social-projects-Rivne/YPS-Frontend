import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleFormComponent } from './add-schedule-form.component';

describe('AddScheduleFormComponent', () => {
  let component: AddScheduleFormComponent;
  let fixture: ComponentFixture<AddScheduleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScheduleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
