import { TestBed, inject } from '@angular/core/testing';

import { MentionsService } from './mentions.service';
import {HttpClientModule} from "@angular/common/http";

describe('MentionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentionsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([MentionsService], (service: MentionsService) => {
    expect(service).toBeTruthy();
  }));
});
