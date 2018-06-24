import { TestBed, inject } from '@angular/core/testing';

import { GetAllUniversityService } from './get-all-university.service';

describe('GetAllUniversityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllUniversityService]
    });
  });

  it('should be created', inject([GetAllUniversityService], (service: GetAllUniversityService) => {
    expect(service).toBeTruthy();
  }));
});
