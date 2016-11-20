import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers: number[];
  showLegend: boolean;

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbers = this.numbersService.getNumbers();
  }

  colorNumber(n: number): string {
    if (this.numbersService.isPrime(n)) {
      return 'green';
    } else if (this.numbersService.isMultipleOfThree(n)) {
      return 'red';
    } else {
      return 'black';
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }

}
