import { TestBed } from '@angular/core/testing';

import { CompaniesListResolverService } from './companies-list-resolver.service';

describe('CompaniesListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompaniesListResolverService = TestBed.get(CompaniesListResolverService);
    expect(service).toBeTruthy();
  });
});
