import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFormComponent } from './nav-bar-form.component';

describe('NavBarFormComponent', () => {
  let component: NavBarFormComponent;
  let fixture: ComponentFixture<NavBarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
