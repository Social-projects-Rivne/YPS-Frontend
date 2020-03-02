import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCabinetComponent } from './master-cabinet.component';

describe('MasterCabinetComponent', () => {
  let component: MasterCabinetComponent;
  let fixture: ComponentFixture<MasterCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
