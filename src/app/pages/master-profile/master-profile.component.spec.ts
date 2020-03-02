import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileComponent } from './master-profile.component';

describe('MasterProfileComponent', () => {
  let component: MasterProfileComponent;
  let fixture: ComponentFixture<MasterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
