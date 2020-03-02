import { TestBed } from '@angular/core/testing';

import { UpcomingTestsService } from './upcoming-tests.service';

describe('UpcomingTestsService', () => {
  let service: UpcomingTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
