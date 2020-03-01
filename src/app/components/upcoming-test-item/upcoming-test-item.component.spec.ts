import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestItemComponent } from './upcoming-test-item.component';

describe('UpcomingTestItemComponent', () => {
  let component: UpcomingTestItemComponent;
  let fixture: ComponentFixture<UpcomingTestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
