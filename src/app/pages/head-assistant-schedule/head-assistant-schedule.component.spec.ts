import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistantScheduleComponent } from './head-assistant-schedule.component';

describe('HeadAssistantScheduleComponent', () => {
  let component: HeadAssistantScheduleComponent;
  let fixture: ComponentFixture<HeadAssistantScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistantScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistantScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
