import { TestBed } from '@angular/core/testing';
import { SchoolRequestService } from './school-request.service';


describe('SchoolRequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolRequestService = TestBed.get(SchoolRequestService);
    expect(service).toBeTruthy();
  });
});
