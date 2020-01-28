import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadassistantsComponent } from './headassistants.component';

describe('HeadassistantsComponent', () => {
  let component: HeadassistantsComponent;
  let fixture: ComponentFixture<HeadassistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadassistantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadassistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
