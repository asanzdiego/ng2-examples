import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NumbersService } from './numbers.service';
import { LessNumbersService } from './less-numbers.service';
import { LogDebugger } from './logger.service';

export const TITLE_APP = new OpaqueToken('title');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  // Component will use NumbersService, but LessNumbersService will be injected instead
  providers: [
    LessNumbersService, 
    {
      provide: NumbersService,
      useExisting: LessNumbersService
    },
    {
      provide: LogDebugger,
      useFactory: () => {
        return new LogDebugger(true);
      }
    },
    {
      provide: TITLE_APP,
      useValue: "Lista de numeracos"
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
