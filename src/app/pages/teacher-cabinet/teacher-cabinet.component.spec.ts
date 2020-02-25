import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCabinetComponent } from './teacher-cabinet.component';

describe('TeacherCabinetComponent', () => {
  let component: TeacherCabinetComponent;
  let fixture: ComponentFixture<TeacherCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
