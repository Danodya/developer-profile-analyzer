import { TestBed, inject } from '@angular/core/testing';

import { IssuesService } from './issues.service';
import {HttpClientModule} from "@angular/common/http";

describe('IssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([IssuesService], (service: IssuesService) => {
    expect(service).toBeTruthy();
  }));
});
