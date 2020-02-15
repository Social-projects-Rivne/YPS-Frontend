import { TestBed } from '@angular/core/testing';

import { UserAdminInfoService } from './admin.service';

describe('UserinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAdminInfoService = TestBed.get(UserAdminInfoService);
    expect(service).toBeTruthy();
  });
});