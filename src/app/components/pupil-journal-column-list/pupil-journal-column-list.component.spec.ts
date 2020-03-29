import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilJournalColumnListComponent } from './pupil-journal-column-list.component';

describe('PupilJournalColumnListComponent', () => {
  let component: PupilJournalColumnListComponent;
  let fixture: ComponentFixture<PupilJournalColumnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilJournalColumnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilJournalColumnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
