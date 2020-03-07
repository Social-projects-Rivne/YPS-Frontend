import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDayCardComponent } from './schedule-day-card.component';

describe('ScheduleDayCardComponent', () => {
  let component: ScheduleDayCardComponent;
  let fixture: ComponentFixture<ScheduleDayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
