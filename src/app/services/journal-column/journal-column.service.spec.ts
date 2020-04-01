import { TestBed } from '@angular/core/testing';

import { JournalColumnService } from './journal-column.service';

describe('JournalColumnService', () => {
  let service: JournalColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
