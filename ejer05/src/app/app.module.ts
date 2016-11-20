import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NumbersService } from './numbers.service';
import { AppComponent } from './app.component';
import { NumberslistComponent } from './numberslist/numberslist.component';
import { LegendComponent } from './legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberslistComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
