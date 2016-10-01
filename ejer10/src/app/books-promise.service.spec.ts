/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksPromiseService } from './books-promise.service';

describe('Service: BooksPromise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksPromiseService]
    });
  });

  it('should ...', inject([BooksPromiseService], (service: BooksPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
