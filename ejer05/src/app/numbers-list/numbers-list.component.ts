import { Component, OnInit, Input } from '@angular/core';
import { NumbersService } from './../numbers.service';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.css'],
  providers: [NumbersService]
})
export class NumbersListComponent implements OnInit {

  private numbers: Array<number>;
  @Input() private title: string;

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

}
