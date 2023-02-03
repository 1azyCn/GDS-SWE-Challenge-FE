import { TestBed } from '@angular/core/testing';

import { GetAllEmployeeRecordsService } from './get-all-employee-records.service';

describe('GetAllEmployeeRecordsService', () => {
  let service: GetAllEmployeeRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllEmployeeRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
