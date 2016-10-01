import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GOOGLE_BOOKS_SEARCH_URL } from './app.tokens';

import { BooksService } from './books.service';
import { GooglebooksSearchComponent } from './googlebooks-search/googlebooks-search.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { WikipediaSmartSearchComponent } from './wikipedia-smart-search/wikipedia-smart-search.component';

// To use promise version
//import { BooksService } from './books-promise.service';



@NgModule({
  declarations: [
    AppComponent,
    GooglebooksSearchComponent,
    WikipediaSearchComponent,
    WikipediaSmartSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    {
      provide: GOOGLE_BOOKS_SEARCH_URL,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    },
    BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
