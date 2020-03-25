import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsCardListComponent } from './upcoming-events-card-list.component';

describe('UpcomingEventsCardListComponent', () => {
  let component: UpcomingEventsCardListComponent;
  let fixture: ComponentFixture<UpcomingEventsCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
