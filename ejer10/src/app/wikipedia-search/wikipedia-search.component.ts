import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css'],
  providers: [WikipediaService]
})
export class WikipediaSearchComponent implements OnInit {
  private items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.items = this.wikipediaService.search(term);
  }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/