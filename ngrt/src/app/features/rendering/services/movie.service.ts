import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './../../../shared/models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL: string = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiURL}${id}`);
  }
}
