import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private show: boolean;

  constructor() {}

  ngOnInit() {
    this.show = false;
  }

  showExtraEvent($event) {
    this.show = $event;
  }
}
