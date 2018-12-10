import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pokemon, Pokedex } from '../../shared/models/pokemon.interfaces';
import { ApiService } from './api/api.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private apiService: ApiService) {}

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.apiService
      .get<Pokedex>(environment.endpointPokemons)
      .pipe(map(response => response.pokemon, catchError(this.handleError)));
  }
}
