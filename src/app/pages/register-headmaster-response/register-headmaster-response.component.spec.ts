import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadmasterResponseComponent } from './register-headmaster-response.component';

describe('RegisterHeadmasterResponseComponent', () => {
  let component: RegisterHeadmasterResponseComponent;
  let fixture: ComponentFixture<RegisterHeadmasterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHeadmasterResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHeadmasterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
