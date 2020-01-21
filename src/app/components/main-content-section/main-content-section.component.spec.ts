import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentSectionComponent } from './main-content-section.component';

describe('MainContentSectionComponent', () => {
  let component: MainContentSectionComponent;
  let fixture: ComponentFixture<MainContentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
