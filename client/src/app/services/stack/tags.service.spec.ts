import { TestBed, inject } from '@angular/core/testing';

import { TagsService } from './tags.service';
import {HttpClientModule} from "@angular/common/http";

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([TagsService], (service: TagsService) => {
    expect(service).toBeTruthy();
  }));
});
