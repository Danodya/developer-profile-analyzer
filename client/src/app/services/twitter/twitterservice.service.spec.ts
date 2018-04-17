import { TestBed, inject } from '@angular/core/testing';

import {TwitterService} from './twitter.service';

describe('TwitterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterService]
    });
  });

  it('should be created', inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
