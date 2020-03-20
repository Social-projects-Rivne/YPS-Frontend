import { TestBed } from '@angular/core/testing';

import { ParentsService } from './parents.service';

describe('ParentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentsService = TestBed.get(ParentsService);
    expect(service).toBeTruthy();
  });
});
