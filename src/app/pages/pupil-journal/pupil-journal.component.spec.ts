import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilJournalComponent } from './pupil-journal.component';

describe('PupilJournalComponent', () => {
  let component: PupilJournalComponent;
  let fixture: ComponentFixture<PupilJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
