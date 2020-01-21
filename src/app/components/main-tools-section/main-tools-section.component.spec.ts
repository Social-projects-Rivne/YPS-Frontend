import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolsSectionComponent } from './main-tools-section.component';

describe('MainToolsSectionComponent', () => {
  let component: MainToolsSectionComponent;
  let fixture: ComponentFixture<MainToolsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
