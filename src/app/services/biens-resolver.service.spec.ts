import { TestBed } from '@angular/core/testing';

import { BiensResolverService } from './biens-resolver.service';

describe('BiensResolverService', () => {
  let service: BiensResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiensResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
