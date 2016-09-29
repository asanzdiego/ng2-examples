import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
	.red { color: red; }
	.blue { color: blue; }
  .green { color: yellow; }   
  `],
  /*styleUrls: ['./app.component.css']*/
})
export class AppComponent {

  numbers: number[] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 17, 19, 21, 23, 25, 31, 32, 34];
  showLegend: boolean = false;

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

  colorNumber(n: number): string {
    if (this.isPrime(n)) {
      return "red";
    } else if (this.isMultipleOfThree(n)){
      return "green";
    } else {
      return "blue";
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }
}