import { TestBed } from '@angular/core/testing';

import { PupilinfoService } from './pupilinfo.service';

describe('PupilinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PupilinfoService = TestBed.get(PupilinfoService);
    expect(service).toBeTruthy();
  });
});
