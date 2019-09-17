import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoTableConfig, GoTablePageConfig } from '@tangoe/goponents';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { PokemonSet, Pokemon } from '../models/poke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  get(params?: GoTableConfig): Observable<any> {
    let extraParams = '';
    if (params) {
      extraParams = '?offset=' + params.pageConfig.offset;
      extraParams = extraParams + '&limit=' + params.pageConfig.perPage;
    }

    return this.http.get<PokemonSet>('https://pokeapi.co/api/v2/pokemon/' + extraParams).pipe(map((data: PokemonSet) => {
      const formattedData: { totalCount: number, results: Pokemon[] } = { totalCount: 0, results: [] };

      formattedData.totalCount = data.count;
      formattedData.results = data.results;

      return formattedData;
    }));
  }

  getDetails(pokemon: Pokemon[]): Observable<Pokemon[]> {
    let requests = [];

    pokemon.forEach(i => {
      requests.push(this.getByName(i.name).subscribe(j => {
        i = j;
      }));
    });

    return forkJoin(requests);
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  private paginateData(paging: GoTablePageConfig, results: Pokemon[]): any[] {
    return results.slice(paging.offset, paging.offset + paging.perPage);
  }
}
