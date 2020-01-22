import { TestBed } from '@angular/core/testing';

import { CompanyDetailResolverService } from './company-detail-resolver.service';

describe('CompanyDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyDetailResolverService = TestBed.get(CompanyDetailResolverService);
    expect(service).toBeTruthy();
  });
});
