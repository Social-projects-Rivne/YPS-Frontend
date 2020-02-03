import { TestBed } from '@angular/core/testing';

import { SchoolRequestServiceService } from './school-request-service.service';

describe('SchoolRequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolRequestServiceService = TestBed.get(SchoolRequestServiceService);
    expect(service).toBeTruthy();
  });
});
