/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumbersService } from './numbers.service';

describe('Service: Numbers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbersService]
    });
  });

  it('should ...', inject([NumbersService], (service: NumbersService) => {
    expect(service).toBeTruthy();
  }));
});
