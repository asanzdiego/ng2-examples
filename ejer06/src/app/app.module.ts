import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickmeComponent } from './clickme/clickme.component';
import { Clickme2Component } from './clickme2/clickme2.component';
import { KeyupComponent } from './keyup/keyup.component';
import { KeyuprefvarComponent } from './keyuprefvar/keyuprefvar.component';
import { KeyupenterComponent } from './keyupenter/keyupenter.component';
import { AddheroesComponent } from './addheroes/addheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickmeComponent,
    Clickme2Component,
    KeyupComponent,
    KeyuprefvarComponent,
    KeyupenterComponent,
    AddheroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
