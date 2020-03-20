import { TestBed } from '@angular/core/testing';

import { PupilsService } from './pupils.service';

describe('PupilinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PupilsService = TestBed.get(PupilsService);
    expect(service).toBeTruthy();
  });
});
