import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilEventCardComponent } from './pupil-event-card.component';

describe('PupilEventCardComponent', () => {
  let component: PupilEventCardComponent;
  let fixture: ComponentFixture<PupilEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
