import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRequestsComponent } from './school-requests.component';

describe('SchoolRequestsComponent', () => {
  let component: SchoolRequestsComponent;
  let fixture: ComponentFixture<SchoolRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
