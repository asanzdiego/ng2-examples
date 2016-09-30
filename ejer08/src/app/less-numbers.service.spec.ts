/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LessNumbersService } from './less-numbers.service';

describe('Service: LessNumbers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessNumbersService]
    });
  });

  it('should ...', inject([LessNumbersService], (service: LessNumbersService) => {
    expect(service).toBeTruthy();
  }));
});
