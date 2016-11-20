import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 17, 19, 21, 23, 25, 31, 32, 34];
  showLegend: boolean = false;

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


  colorNumber(n: number): string {
    if (this.isPrime(n)) {
      return 'green';
    } else if (this.isMultipleOfThree(n)) {
      return 'red';
    } else {
      return 'black';
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }

}
