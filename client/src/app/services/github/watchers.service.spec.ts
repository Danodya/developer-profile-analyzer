import { TestBed, inject } from '@angular/core/testing';

import { WatchersService } from './watchers.service';

describe('WatchersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchersService]
    });
  });

  it('should be created', inject([WatchersService], (service: WatchersService) => {
    expect(service).toBeTruthy();
  }));
});
