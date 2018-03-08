import { TestBed, inject } from '@angular/core/testing';

import { ForksService } from './forks.service';
import {HttpClientModule} from "@angular/common/http";

describe('ForksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForksService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ForksService], (service: ForksService) => {
    expect(service).toBeTruthy();
  }));
});
