import { TestBed } from '@angular/core/testing';

import { TeacherinfoService } from './teacherinfo.service';

describe('TeacherinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherinfoService = TestBed.get(TeacherinfoService);
    expect(service).toBeTruthy();
  });
});
