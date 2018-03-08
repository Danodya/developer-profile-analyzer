import { TestBed, inject } from '@angular/core/testing';

import { ChartService } from './chart.service';
import {HttpClientModule} from "@angular/common/http";

describe('ChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));
});
