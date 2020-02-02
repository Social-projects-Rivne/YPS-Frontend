import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherFormComponent } from './add-teacher-form.component';

describe('AddTeacherFormComponent', () => {
  let component: AddTeacherFormComponent;
  let fixture: ComponentFixture<AddTeacherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
