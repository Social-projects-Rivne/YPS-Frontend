import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistantUpcomingEventsComponent } from './head-assistant-upcoming-events.component';

describe('HeadAssistantUpcomingEventsComponent', () => {
  let component: HeadAssistantUpcomingEventsComponent;
  let fixture: ComponentFixture<HeadAssistantUpcomingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistantUpcomingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistantUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
