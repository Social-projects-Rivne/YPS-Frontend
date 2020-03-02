import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilInfoCardComponent } from './pupil-info-card.component';

describe('PupilInfoCardComponent', () => {
  let component: PupilInfoCardComponent;
  let fixture: ComponentFixture<PupilInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
