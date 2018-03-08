import { TestBed, inject } from '@angular/core/testing';

import { CommitsService } from './commits.service';
import {HttpClientModule} from "@angular/common/http";

describe('CommitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CommitsService], (service: CommitsService) => {
    expect(service).toBeTruthy();
  }));
});
