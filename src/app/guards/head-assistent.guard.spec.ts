import { TestBed } from '@angular/core/testing';

import { HeadAssistentGuard } from './head-assistent.guard';

describe('HeadAssistentGuard', () => {
  let guard: HeadAssistentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeadAssistentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
