import { TestBed } from '@angular/core/testing';

import { TransactionDetialsService } from './transaction-detials.service';

describe('TransactionDetialsService', () => {
  let service: TransactionDetialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDetialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
