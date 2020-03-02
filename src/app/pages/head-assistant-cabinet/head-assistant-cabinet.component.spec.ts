import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistantCabinetComponent } from './head-assistant-cabinet.component';

describe('HeadAssistantCabinetComponent', () => {
  let component: HeadAssistantCabinetComponent;
  let fixture: ComponentFixture<HeadAssistantCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistantCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistantCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
