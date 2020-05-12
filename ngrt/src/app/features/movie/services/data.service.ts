import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Movie } from './../../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getByUrl<T>(url: string): Observable<T> {
    return this.http.get<any>(url);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiURL}films/${id}`);
  }

}

export interface MovieResponse {
  count: number;
  previous: string;
  next: string;
  results: Movie[];
}
