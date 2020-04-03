import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassJournalComponent } from './my-class-journal.component';

describe('MyClassJournalComponent', () => {
  let component: MyClassJournalComponent;
  let fixture: ComponentFixture<MyClassJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
