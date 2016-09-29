import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
	.red { color: red; }
	.blue { color: blue; }
  .green { color: yellow; }   
  `],
  /*styleUrls: ['./app.component.css']*/
  providers: [NumbersService]
})
export class AppComponent implements OnInit {

  numbers: Array<number>;
  showLegend: boolean = false;

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbers = this.numbersService.getNumbers();
  }

  colorNumber(n: number): string {
    if (this.numbersService.isPrime(n)) {
      return "red";
    } else if (this.numbersService.isMultipleOfThree(n)){
      return "green";
    } else {
      return "blue";
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }
}