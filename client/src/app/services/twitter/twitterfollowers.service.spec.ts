import { TestBed, inject } from '@angular/core/testing';

import { TwitterfollowersService } from './twitterfollowers.service';

describe('TwitterfollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterfollowersService]
    });
  });

  it('should be created', inject([TwitterfollowersService], (service: TwitterfollowersService) => {
    expect(service).toBeTruthy();
  }));
});
