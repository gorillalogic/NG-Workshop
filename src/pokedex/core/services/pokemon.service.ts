import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokedex } from '../../shared/models/pokemon.interfaces';
import { ApiService } from './api/api.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Headers, Http, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private apiService: ApiService, private http: Http) { }

  private handleError(error: any): Observable<any> {
    return Observable.throw(console.error("Some error occured", error));
  }

  getPokemons() : Observable<Pokemon[]> {
    var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    return this.apiService.get<Pokedex>(url).pipe(
      map(response => 
        response.pokemon
      , catchError(this.handleError))
    )
  }


  
}
