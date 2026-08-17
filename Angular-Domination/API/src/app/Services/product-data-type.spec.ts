import { TestBed } from '@angular/core/testing';

import { ProductDataType } from './product-data-type';

describe('ProductDataType', () => {
  let service: ProductDataType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
