import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherItemComponent } from './teacher-item.component';

describe('TeacherItemComponent', () => {
  let component: TeacherItemComponent;
  let fixture: ComponentFixture<TeacherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
