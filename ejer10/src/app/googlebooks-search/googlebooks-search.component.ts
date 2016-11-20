import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { GOOGLE_BOOKS_SEARCH_URL } from '../app.tokens';



@Component({
  selector: 'app-googlebooks-search',
  templateUrl: './googlebooks-search.component.html',
  styleUrls: ['./googlebooks-search.component.css'],
  providers: [
    {
      provide: GOOGLE_BOOKS_SEARCH_URL,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    },
    BooksService]
})
export class GooglebooksSearchComponent implements OnInit {

  private books: string[];

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
