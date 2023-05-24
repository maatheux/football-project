import { TestBed } from '@angular/core/testing';

import { GetApiStatusService } from './get-api-status.service';

describe('GetApiStatusService', () => {
  let service: GetApiStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
