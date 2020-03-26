import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenBoxComponent } from './children-box.component';

describe('ChildrenBoxComponent', () => {
  let component: ChildrenBoxComponent;
  let fixture: ComponentFixture<ChildrenBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
