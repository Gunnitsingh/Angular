import { TestBed } from '@angular/core/testing';

import { CustomerCareDisplayDetailsService } from './customer-care-display-details.service';

describe('CustomerCareDisplayDetailsService', () => {
  let service: CustomerCareDisplayDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCareDisplayDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
