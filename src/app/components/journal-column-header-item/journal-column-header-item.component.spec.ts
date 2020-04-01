import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalColumnHeaderItemComponent } from './journal-column-header-item.component';

describe('JournalColumnHeaderItemComponent', () => {
  let component: JournalColumnHeaderItemComponent;
  let fixture: ComponentFixture<JournalColumnHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalColumnHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalColumnHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
