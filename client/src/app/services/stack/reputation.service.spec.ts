import { TestBed, inject } from '@angular/core/testing';

import { ReputationService } from './reputation.service';
import {HttpClientModule} from "@angular/common/http";

describe('ReputationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReputationService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ReputationService], (service: ReputationService) => {
    expect(service).toBeTruthy();
  }));
});
