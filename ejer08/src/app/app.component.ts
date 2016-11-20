import { Component, OnInit, Inject, OpaqueToken } from '@angular/core';
import { NumbersService } from './numbers.service';
import { LoggerService } from './logger.service';


const TITLE_APP = new OpaqueToken('title');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: TITLE_APP,
      useValue: 'Lista de numeracos'
    }
  ]
})
export class AppComponent implements OnInit {
  numbers: number[];
  showLegend: boolean;

  constructor(private numbersService: NumbersService, private logger: LoggerService, @Inject(TITLE_APP) private title: string) {}

  ngOnInit() {
    this.numbers = this.numbersService.getNumbers();
  }

  colorNumber(n: number): string {
    if (this.numbersService.isPrime(n)) {
      this.logger.debug('Verde');
      return 'green';
    } else if (this.numbersService.isMultipleOfThree(n)) {
      this.logger.debug('Rojo');
      return 'red';
    } else {
      this.logger.debug('negro');
      return 'black';
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }

}
