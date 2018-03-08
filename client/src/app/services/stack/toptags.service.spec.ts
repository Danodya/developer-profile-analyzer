import { TestBed, inject } from '@angular/core/testing';

import { ToptagsService } from './toptags.service';
import {HttpClientModule} from "@angular/common/http";

describe('ToptagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToptagsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ToptagsService], (service: ToptagsService) => {
    expect(service).toBeTruthy();
  }));
});
