import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBoxComponent } from './quotes-box.component';

describe('QuotesBoxComponent', () => {
  let component: QuotesBoxComponent;
  let fixture: ComponentFixture<QuotesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
