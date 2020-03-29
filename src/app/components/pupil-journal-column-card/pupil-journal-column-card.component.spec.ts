import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilJournalColumnCardComponent } from './pupil-journal-column-card.component';

describe('PupilJournalColumnCardComponent', () => {
  let component: PupilJournalColumnCardComponent;
  let fixture: ComponentFixture<PupilJournalColumnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilJournalColumnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilJournalColumnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
