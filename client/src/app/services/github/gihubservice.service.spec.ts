import { TestBed, inject } from '@angular/core/testing';

import { GihubserviceService } from './gihubservice.service';

describe('GihubserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GihubserviceService]
    });
  });

  it('should be created', inject([GihubserviceService], (service: GihubserviceService) => {
    expect(service).toBeTruthy();
  }));
});
