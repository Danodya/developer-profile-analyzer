import { TestBed, inject } from '@angular/core/testing';

import { WatchersService } from './watchers.service';
import {HttpClientModule} from "@angular/common/http";

describe('WatchersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchersService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([WatchersService], (service: WatchersService) => {
    expect(service).toBeTruthy();
  }));
});
