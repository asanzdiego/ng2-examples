import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() n = 0;
  @Output() show = new EventEmitter<boolean>();

  private sw: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  emitShow() {
    this.sw = !this.sw;
    this.show.emit(this.sw);
  }

}
