import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../core/services/pokemon.service';
import { switchMap, filter } from 'rxjs/operators';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IPokemonState } from '@pokedex/features/components/store/pokemon.state';
import { getPokemonByIdSelector } from '@pokedex/features/components/store/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemonDetail: Pokemon;
  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private store: Store<IPokemonState>
  ) {}

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(
      this.route.paramMap
        .pipe(
          switchMap(params => {
            const pokemonId = Number(params.get('id'));
            return this.store.select(getPokemonByIdSelector(pokemonId));
          })
        )
        .subscribe(pokemon => (this.pokemonDetail = pokemon))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
