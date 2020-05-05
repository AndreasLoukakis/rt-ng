import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getMoviesAsObservable(): Observable<Movie[]> {
    return this.http.get<MovieResponse>(`${this.apiURL}films`).pipe(
      map(response => response.results)
    )
  }

  // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
  getMoviesAsPromise(): Promise<Movie[]> {
    return fetch(`${this.apiURL}films`)
      .then(response => response.json())
      .then(data => data.results);
  }
}

export interface MovieResponse {
  count: number;
  previous: string;
  next: string;
  results: Movie[];
}
