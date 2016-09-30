import { Injectable } from '@angular/core';

@Injectable()
export class LessNumbersService {

  numbers: number[] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 17, 19, 21, 23, 25, 31, 32, 34];

  constructor() { }
  
  getNumbers() {
    return this.numbers.slice(5, 16);
  }

  isPrime(n: number): boolean {
    if (n === 2) {
      return true; // special case
    }

    if (n < 3 || n % 2 === 0 || n !== Math.floor(n)) {
      return false; // prime numbers must be odd integers greater than 2
    }

    var max = Math.floor(Math.sqrt(n)); // highest necessary divisor

    // skip even numbers
    for (var i = 3; i <= max; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  isMultipleOfThree(n: number): boolean {
    return n % 3 == 0;
  }
 
}
