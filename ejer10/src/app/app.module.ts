import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { WikipediaSmartSearchComponent } from './wikipedia-smart-search/wikipedia-smart-search.component';
import { GooglebooksSearchComponent } from './googlebooks-search/googlebooks-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent,
    WikipediaSmartSearchComponent,
    GooglebooksSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
