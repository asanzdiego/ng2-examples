import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  private quotes: any;
  private quote: any;

  constructor() {
    this.quotes = require('./quotes.json');
    let randomIndex = Math.floor(Math.random() * this.quotes.quotes.length);
    this.quote = this.quotes.quotes[randomIndex];
   }

  ngOnInit() {
  }

}
