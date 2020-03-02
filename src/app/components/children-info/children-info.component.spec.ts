import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenInfoComponent } from './children-info.component';

describe('ChildrenInfoComponent', () => {
  let component: ChildrenInfoComponent;
  let fixture: ComponentFixture<ChildrenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
