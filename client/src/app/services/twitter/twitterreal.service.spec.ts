import { TestBed, inject } from '@angular/core/testing';

import { TwitterrealService } from './twitterreal.service';

describe('TwitterrealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterrealService]
    });
  });

  it('should be created', inject([TwitterrealService], (service: TwitterrealService) => {
    expect(service).toBeTruthy();
  }));
});
