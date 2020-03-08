import { TestBed } from '@angular/core/testing';
import { SchoolRequestsService } from './school-request.service';


describe('SchoolRequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolRequestsService = TestBed.get(SchoolRequestsService);
    expect(service).toBeTruthy();
  });
});
