import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilListComponent } from './pupil-list.component';

describe('PupilListComponent', () => {
  let component: PupilListComponent;
  let fixture: ComponentFixture<PupilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
