import { Component, OnInit, Inject, OpaqueToken } from '@angular/core';
import { NumbersService } from './numbers.service';
import { LogDebugger } from './logger.service';
import { TITLE_APP } from './app.module';


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
export class AppComponent implements OnInit {

  numbers: Array<number>;
  showLegend: boolean = false;

  // Need to call @Inject() for TITLE_APP, even when it's included in the providers array
  constructor(private numbersService: NumbersService, private logger: LogDebugger, @Inject(TITLE_APP) private title: string) {}

  ngOnInit() {
    this.numbers = this.numbersService.getNumbers();
  }

  colorNumber(n: number): string {
    if (this.numbersService.isPrime(n)) {
      this.logger.debug("Rojo");
      return "red";
    } else if (this.numbersService.isMultipleOfThree(n)){
      this.logger.debug("Verde")
      return "green";
    } else {
      this.logger.debug("Azul")
      return "blue";
    }
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
    this.logger.debug("Leyenda cambiada");
  }
}