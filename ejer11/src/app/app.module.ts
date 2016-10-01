import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ProductMemDb } from './product-mem-db';
import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { ProductFilterPipe } from './product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductMemDb)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
