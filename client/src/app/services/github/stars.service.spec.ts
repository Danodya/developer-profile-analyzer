import { TestBed, inject } from '@angular/core/testing';

import { StarsService } from './stars.service';
import {HttpClientModule} from "@angular/common/http";

describe('StarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([StarsService], (service: StarsService) => {
    expect(service).toBeTruthy();
  }));
});
