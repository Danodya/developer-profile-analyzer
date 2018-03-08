import { TestBed, inject } from '@angular/core/testing';

import { OrganizationsService } from './organizations.service';
import {HttpClientModule} from "@angular/common/http";

describe('OrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([OrganizationsService], (service: OrganizationsService) => {
    expect(service).toBeTruthy();
  }));
});
