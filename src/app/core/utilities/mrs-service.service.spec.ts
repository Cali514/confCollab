import { TestBed } from '@angular/core/testing';

import { MrsServiceService } from './mrs-service.service';

describe('MrsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MrsServiceService = TestBed.get(MrsServiceService);
    expect(service).toBeTruthy();
  });
});
