import { TestBed, inject } from '@angular/core/testing';

import { ReputationService } from './reputation.service';

describe('ReputationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReputationService]
    });
  });

  it('should be created', inject([ReputationService], (service: ReputationService) => {
    expect(service).toBeTruthy();
  }));
});
