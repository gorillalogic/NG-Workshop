import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() {}

  ngOnInit() {}
}
