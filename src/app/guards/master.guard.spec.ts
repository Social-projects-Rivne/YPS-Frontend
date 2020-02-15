import { TestBed } from '@angular/core/testing';

import { MasterGuard } from './master.guard';

describe('MasterGuard', () => {
  let guard: MasterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MasterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
