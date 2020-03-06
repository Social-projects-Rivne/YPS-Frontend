import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestCardListComponent } from './upcoming-test-card-list.component';

describe('UpcomingTestCardListComponent', () => {
  let component: UpcomingTestCardListComponent;
  let fixture: ComponentFixture<UpcomingTestCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTestCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTestCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
