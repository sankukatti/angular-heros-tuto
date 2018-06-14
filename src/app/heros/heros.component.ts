import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  public selectedHero : Hero;

  public heros = HEROS;

  constructor() { }

  ngOnInit() {
  }

  onHeroSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
