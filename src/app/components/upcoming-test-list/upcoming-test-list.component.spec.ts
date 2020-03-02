import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestListComponent } from './upcoming-test-list.component';

describe('UpcomingTestListComponent', () => {
  let component: UpcomingTestListComponent;
  let fixture: ComponentFixture<UpcomingTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
