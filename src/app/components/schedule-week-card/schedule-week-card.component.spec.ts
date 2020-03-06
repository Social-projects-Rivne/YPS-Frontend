import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleWeekCardComponent } from './schedule-week-card.component';

describe('ScheduleWeekCardComponent', () => {
  let component: ScheduleWeekCardComponent;
  let fixture: ComponentFixture<ScheduleWeekCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleWeekCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleWeekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
