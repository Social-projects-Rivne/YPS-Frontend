import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestCardComponent } from './upcoming-test-card.component';

describe('UpcomingTestCardComponent', () => {
  let component: UpcomingTestCardComponent;
  let fixture: ComponentFixture<UpcomingTestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
