import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
//import { BooksService } from './books-promise.service';

@Component({
  selector: 'app-googlebooks-search',
  templateUrl: './googlebooks-search.component.html',
  styleUrls: ['./googlebooks-search.component.css']
})
export class GooglebooksSearchComponent implements OnInit {
  private books: string[];

  // Needed to use promises instead of observables
  //mode = 'Promise';

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.books = [];
  }

  search(title: string) {
    this.service.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }

  // Version with promises
  /*search(title: string) {
    this.service.getBooks(title).then(
          books => this.books = books,
          error => console.error(error));
  }*/

}
