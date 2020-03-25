import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpcomingEventFormComponent } from './add-upcoming-event-form.component';

describe('AddUpcomingEventFormComponent', () => {
  let component: AddUpcomingEventFormComponent;
  let fixture: ComponentFixture<AddUpcomingEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpcomingEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpcomingEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
