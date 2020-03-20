import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScheduleComponent } from './main-schedule.component';

describe('MainScheduleComponent', () => {
  let component: MainScheduleComponent;
  let fixture: ComponentFixture<MainScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
