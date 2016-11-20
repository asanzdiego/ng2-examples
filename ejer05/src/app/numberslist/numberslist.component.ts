import { Component, OnInit, EventEmitter } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-numberslist',
  templateUrl: './numberslist.component.html',
  styleUrls: ['./numberslist.component.css'],
  inputs: ['title'],
  outputs: ['extra']
})
export class NumberslistComponent implements OnInit {

  private numbers: number[];
  private title: string;
  private showExtraInfo: boolean;
  private extra = new EventEmitter<boolean>();

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbers = this.numbersService.getNumbers();
    this.showExtraInfo = false;
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

  emitEvent() {
    this.showExtraInfo = !this.showExtraInfo;
    this.extra.emit(this.showExtraInfo);
  }

}
