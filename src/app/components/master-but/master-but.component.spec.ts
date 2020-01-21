import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterButComponent } from './master-but.component';

describe('MasterButComponent', () => {
  let component: MasterButComponent;
  let fixture: ComponentFixture<MasterButComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterButComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
