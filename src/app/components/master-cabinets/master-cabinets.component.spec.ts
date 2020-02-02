import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCabinetsComponent } from './master-cabinets.component';

describe('MasterCabinetsComponent', () => {
  let component: MasterCabinetsComponent;
  let fixture: ComponentFixture<MasterCabinetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCabinetsComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
