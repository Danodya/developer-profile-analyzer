import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './gihubservice.service';
import {HttpClientModule} from "@angular/common/http";

describe('GihubserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
