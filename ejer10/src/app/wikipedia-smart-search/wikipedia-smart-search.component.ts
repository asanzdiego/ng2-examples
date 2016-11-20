import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wikipedia-smart-search',
  templateUrl: './wikipedia-smart-search.component.html',
  styleUrls: ['./wikipedia-smart-search.component.css'],
  providers: [WikipediaService]
})
export class WikipediaSmartSearchComponent implements OnInit {

  // Subject here acts as a bridge between the observable events (keyups) and subscriber (the component)
  // Check http://reactivex.io/documentation/subject.html
  private searchTermStream = new Subject<string>();
  private items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
    this.items = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
  }

  search(term: string) { this.searchTermStream.next(term); }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
