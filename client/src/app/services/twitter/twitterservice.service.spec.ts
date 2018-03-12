import { TestBed, inject } from '@angular/core/testing';

import { TwitterserviceService } from './twitter.service';

describe('TwitterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterserviceService]
    });
  });

  it('should be created', inject([TwitterserviceService], (service: TwitterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
