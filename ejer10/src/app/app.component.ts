import { Component, OnInit } from '@angular/core';
//import { BooksService } from './books.service';
import { BooksService } from './books-promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private books: string[];

  mode = 'Promise';

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.books = [];
  }

  /*search(title: string) {

    this.service.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }*/

  // Version with promises
  search(title: string) {
    this.service.getBooks(title).then(
          books => this.books = books,
          error => console.error(error));
  }
}


