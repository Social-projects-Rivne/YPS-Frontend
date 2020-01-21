import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMainComponent } from './school-main.component';

describe('SchoolMainComponent', () => {
  let component: SchoolMainComponent;
  let fixture: ComponentFixture<SchoolMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
