import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilItemComponent } from './pupil-item.component';

describe('PupilItemComponent', () => {
  let component: PupilItemComponent;
  let fixture: ComponentFixture<PupilItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
