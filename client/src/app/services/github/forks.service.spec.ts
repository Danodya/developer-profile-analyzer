import { TestBed, inject } from '@angular/core/testing';

import { ForksService } from './forks.service';

describe('ForksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForksService]
    });
  });

  it('should be created', inject([ForksService], (service: ForksService) => {
    expect(service).toBeTruthy();
  }));
});
