import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPupilFormComponent } from './add-pupil-form.component';

describe('AddPupilFormComponent', () => {
  let component: AddPupilFormComponent;
  let fixture: ComponentFixture<AddPupilFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPupilFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPupilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
