import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadmasterComponent } from './register-headmaster.component';

describe('RegisterHeadmasterComponent', () => {
  let component: RegisterHeadmasterComponent;
  let fixture: ComponentFixture<RegisterHeadmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHeadmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHeadmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
