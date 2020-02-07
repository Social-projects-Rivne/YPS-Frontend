import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRequestCardComponent } from './school-request-card.component';

describe('SchoolRequestCardComponent', () => {
  let component: SchoolRequestCardComponent;
  let fixture: ComponentFixture<SchoolRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
