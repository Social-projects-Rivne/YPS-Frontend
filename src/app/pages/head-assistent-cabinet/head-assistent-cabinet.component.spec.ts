import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAssistentCabinetComponent } from './head-assistent-cabinet.component';

describe('HeadAssistentCabinetComponent', () => {
  let component: HeadAssistentCabinetComponent;
  let fixture: ComponentFixture<HeadAssistentCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadAssistentCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAssistentCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
