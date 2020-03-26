import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentItemComponent } from './parent-item.component';

describe('ParentItemComponent', () => {
  let component: ParentItemComponent;
  let fixture: ComponentFixture<ParentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
