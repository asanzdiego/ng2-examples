import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ClickMe2Component } from './click-me2/click-me2.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LittleTourComponent } from './little-tour/little-tour.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { Keyup2Component } from './keyup2/keyup2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyupComponent,
    LittleTourComponent,
    LoopBackComponent,
    Keyup2Component
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
