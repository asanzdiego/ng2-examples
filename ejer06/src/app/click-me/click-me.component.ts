import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = '¡Gracias por hacer click!';
  }
}
