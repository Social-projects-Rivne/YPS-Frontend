import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventCardListComponent } from './upcoming-event-card-list.component';

describe('UpcomingEventsCardListComponent', () => {
  let component: UpcomingEventCardListComponent;
  let fixture: ComponentFixture<UpcomingEventCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
