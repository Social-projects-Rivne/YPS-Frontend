import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubFormComponent } from './user-sub-form.component';

describe('UserSubFormComponent', () => {
  let component: UserSubFormComponent;
  let fixture: ComponentFixture<UserSubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
