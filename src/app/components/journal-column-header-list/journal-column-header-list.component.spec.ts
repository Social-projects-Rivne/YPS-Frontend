import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalColumnHeaderListComponent } from './journal-column-header-list.component';

describe('JournalColumnHeaderListComponent', () => {
  let component: JournalColumnHeaderListComponent;
  let fixture: ComponentFixture<JournalColumnHeaderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalColumnHeaderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalColumnHeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
