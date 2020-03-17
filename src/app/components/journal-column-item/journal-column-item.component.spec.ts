import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalColumnItemComponent } from './journal-column-item.component';

describe('JournalColumnItemComponent', () => {
  let component: JournalColumnItemComponent;
  let fixture: ComponentFixture<JournalColumnItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalColumnItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalColumnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
