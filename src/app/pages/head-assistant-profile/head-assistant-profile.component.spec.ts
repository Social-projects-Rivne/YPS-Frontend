import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistantProfileComponent } from './head-assistant-profile.component';

describe('HeadAssistantProfileComponent', () => {
  let component: HeadAssistantProfileComponent;
  let fixture: ComponentFixture<HeadAssistantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
