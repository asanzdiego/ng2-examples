/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { QuoteService } from './quote.service';

describe('App: Ejer12', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        RandomQuoteComponent
      ],
      providers: [QuoteService]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
