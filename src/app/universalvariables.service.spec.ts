import { TestBed } from '@angular/core/testing';

import { UniversalvariablesService } from './universalvariables.service';

describe('UniversalvariablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversalvariablesService = TestBed.get(UniversalvariablesService);
    expect(service).toBeTruthy();
  });
});
