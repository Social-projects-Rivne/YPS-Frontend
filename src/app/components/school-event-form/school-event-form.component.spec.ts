import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEventFormComponent } from './school-event-form.component';

describe('SchoolEventFormComponent', () => {
  let component: SchoolEventFormComponent;
  let fixture: ComponentFixture<SchoolEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
