import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  values = '';

  constructor() { }

  ngOnInit() {
  }

   onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

}
