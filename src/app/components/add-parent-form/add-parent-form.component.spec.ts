import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParentFormComponent } from './add-parent-form.component';

describe('AddParentFormComponent', () => {
  let component: AddParentFormComponent;
  let fixture: ComponentFixture<AddParentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
