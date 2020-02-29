import { TestBed } from '@angular/core/testing';

import { HeadMasterGuard } from './head-master.guard';

describe('HeadMasterGuard', () => {
  let guard: HeadMasterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeadMasterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
