import { TestBed } from '@angular/core/testing';

import { HttpOptionsService } from './http-options.service';

describe('HttpOptionsService', () => {
  let service: HttpOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
