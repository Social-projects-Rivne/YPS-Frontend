import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalColumnComponent } from './journal-column.component';

describe('JournalColumnComponent', () => {
  let component: JournalColumnComponent;
  let fixture: ComponentFixture<JournalColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
