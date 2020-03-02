import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpcomingTestFormComponent } from './add-upcoming-test-form.component';

describe('AddUpcomingTestFormComponent', () => {
  let component: AddUpcomingTestFormComponent;
  let fixture: ComponentFixture<AddUpcomingTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpcomingTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpcomingTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
