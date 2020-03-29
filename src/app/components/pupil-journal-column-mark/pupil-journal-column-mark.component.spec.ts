import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilJournalColumnMarkComponent } from './pupil-journal-column-mark.component';

describe('PupilJournalColumnMarkComponent', () => {
  let component: PupilJournalColumnMarkComponent;
  let fixture: ComponentFixture<PupilJournalColumnMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilJournalColumnMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilJournalColumnMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
