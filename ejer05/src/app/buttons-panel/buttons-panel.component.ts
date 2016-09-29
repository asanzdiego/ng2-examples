import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css']
})
export class ButtonsPanelComponent implements OnInit {

  showLegend: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }

}
