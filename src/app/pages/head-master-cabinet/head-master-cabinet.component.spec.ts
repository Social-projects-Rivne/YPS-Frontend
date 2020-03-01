import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMasterCabinetComponent } from './head-master-cabinet.component';

describe('HeadMasterCabinetComponent', () => {
  let component: HeadMasterCabinetComponent;
  let fixture: ComponentFixture<HeadMasterCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadMasterCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMasterCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
