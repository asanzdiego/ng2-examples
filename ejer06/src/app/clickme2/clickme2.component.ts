import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickme2',
  templateUrl: './clickme2.component.html',
  styleUrls: ['./clickme2.component.css']
})
export class Clickme2Component implements OnInit {

  private clicks: number;
  private clickMessage: string;

  constructor() { }

  ngOnInit() {
    this.clickMessage = '';
  }

  onClickMe2(event: any) {
    let msg = event ? 'El objeto que has pulsado es un ' + (<HTMLInputElement>event.target).tagName : '';
    this.clickMessage = msg;
  }
}
