import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addheroes',
  templateUrl: './addheroes.component.html',
  styleUrls: ['./addheroes.component.css']
})
export class AddheroesComponent implements OnInit {

  private heroes: string[];

  constructor() { }

  ngOnInit() {
    this.heroes = ['El Fary', 'Chuck Norris', 'Jorge Blanco'];
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
