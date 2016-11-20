import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LessnumbersService } from './lessnumbers.service';
import { NumbersService } from './numbers.service';
import { LoggerService } from './logger.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LessnumbersService,
    {
      provide: NumbersService,
      useExisting: LessnumbersService
    },
    {
      provide: LoggerService,
      useFactory: () => {
        return new LoggerService(true);
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
