import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/pokedex/shared/models/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input()
  pokemon: Pokemon;
  
  constructor() { }

  ngOnInit() {
  }

}
