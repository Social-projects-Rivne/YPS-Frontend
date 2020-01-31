import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadmasterFormComponent } from './add-headmaster-form.component';

describe('AddHeadmasterFormComponent', () => {
  let component: AddHeadmasterFormComponent;
  let fixture: ComponentFixture<AddHeadmasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeadmasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeadmasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
