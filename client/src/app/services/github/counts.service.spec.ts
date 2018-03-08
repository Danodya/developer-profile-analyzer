import { TestBed, inject } from '@angular/core/testing';

import { CountsService } from './counts.service';
import {HttpClientModule} from "@angular/common/http";

describe('CountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CountsService], (service: CountsService) => {
    expect(service).toBeTruthy();
  }));
});
