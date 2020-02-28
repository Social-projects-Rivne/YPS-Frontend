import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistentProfileComponent } from './head-assistent-profile.component';

describe('HeadAssistentProfileComponent', () => {
  let component: HeadAssistentProfileComponent;
  let fixture: ComponentFixture<HeadAssistentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
