import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilEventsComponent } from './pupil-events.component';

describe('PupilEventsComponent', () => {
  let component: PupilEventsComponent;
  let fixture: ComponentFixture<PupilEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
