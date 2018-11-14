import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../shared/models/pokemon.interfaces';
import { ApiService } from './api/api.service';
import { catchError, map } from 'rxjs/operators';
import { Headers, Http, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private apiService: ApiService, private http: Http) { }

  private handleError(error: any): Observable<any> {
    return Observable.throw(console.error("Some error occured", error));
  }

  getPokemons() {
    var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    return this.apiService.get(url).pipe(
      map(response => {
        return <Pokemon[]>response;
      }, catchError(this.handleError))
    );
  }
  
}
