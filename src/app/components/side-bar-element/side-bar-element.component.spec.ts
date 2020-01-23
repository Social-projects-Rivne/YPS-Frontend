import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarElementComponent } from './side-bar-element.component';

describe('SideBarElementComponent', () => {
  let component: SideBarElementComponent;
  let fixture: ComponentFixture<SideBarElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
