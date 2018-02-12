import { TestBed, inject } from '@angular/core/testing';

import { ToptagsService } from './toptags.service';

describe('ToptagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToptagsService]
    });
  });

  it('should be created', inject([ToptagsService], (service: ToptagsService) => {
    expect(service).toBeTruthy();
  }));
});
