import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDayCardComponent } from './lesson-day-card.component';

describe('LessonDayCardComponent', () => {
  let component: LessonDayCardComponent;
  let fixture: ComponentFixture<LessonDayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
