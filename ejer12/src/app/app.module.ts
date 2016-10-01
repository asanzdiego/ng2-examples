import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { QuoteService } from './quote.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    RandomQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
