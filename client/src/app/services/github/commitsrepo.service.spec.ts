import { TestBed, inject } from '@angular/core/testing';

import { CommitsrepoService } from './commitsrepo.service';

describe('CommitsrepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitsrepoService]
    });
  });

  it('should be created', inject([CommitsrepoService], (service: CommitsrepoService) => {
    expect(service).toBeTruthy();
  }));
});
