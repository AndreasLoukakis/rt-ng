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

  // get as promise
  getMoviesAsPromise(): Promise<Movie[]> {
    return fetch(`${this.apiURL}films`)
      // we are geting a Response type
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      // normally, we would at least check response.status
      // and handle rejection
      .then(response => response.json())
      .then(response => response.results);
  }

  // getAsPromiseAndTransform(): Promise<any> {
  //   return fetch(this.apiURL).then((items) => (items as string[]).map(item => `Genre: ${item}`));
  // }

  // get as observable
  getMoviesAsObservable(): Observable<Movie[]> {
    return this.http.get<MovieResponse>(`${this.apiURL}films`).pipe(
      map(response => response.results)
    )
      // .pipe(shareReplay()); // this will not make the controller observable multicast
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiURL}films/${id}`);
  }

  getByUrl<T>(url: string): Observable<T> {
    return this.http.get<any>(url);
  }
}

export interface MovieResponse {
  count: number;
  previous: string;
  next: string;
  results: Movie[];
}
