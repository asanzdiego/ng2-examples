import { Injectable } from '@angular/core';

@Injectable()
export class NumbersService {

  numbers: number[] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 17, 19, 21, 23, 25, 31, 32, 34];

  constructor() { }

  getNumbers() {
    return this.numbers;
  }

  isMultipleOfThree(n: number): boolean {
    return n % 3 === 0;
  }

  isPrime(n: number): boolean {
    if (n === 2) {
      return true;
    }

    for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

}
