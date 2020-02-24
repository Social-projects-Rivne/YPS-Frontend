import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCabinetComponent } from './parent-cabinet.component';

describe('ParentCabinetComponent', () => {
  let component: ParentCabinetComponent;
  let fixture: ComponentFixture<ParentCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
