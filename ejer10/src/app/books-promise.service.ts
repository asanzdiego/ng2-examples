import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { GOOGLE_BOOKS_SEARCH_URL } from './app.tokens';

@Injectable()
export class BooksPromiseService {

  constructor(private http: Http, @Inject(GOOGLE_BOOKS_SEARCH_URL) private baseurl: string) { }

  getBooks(title: string) {

    let url = this.baseurl + title;

    return this.http.get(url)
      .toPromise()
      .then(this.extractTitles) 
      .catch(this.handleError);
  }

  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
