import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterProfileComponent } from './head-master-profile.component';

describe('HeadMasterProfileComponent', () => {
  let component: HeadMasterProfileComponent;
  let fixture: ComponentFixture<HeadMasterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadMasterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
