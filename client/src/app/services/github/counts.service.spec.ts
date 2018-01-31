import { TestBed, inject } from '@angular/core/testing';

import { CountsService } from './counts.service';

describe('CountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountsService]
    });
  });

  it('should be created', inject([CountsService], (service: CountsService) => {
    expect(service).toBeTruthy();
  }));
});
