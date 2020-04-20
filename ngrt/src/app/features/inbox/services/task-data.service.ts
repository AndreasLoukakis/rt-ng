import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../../../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  apiURL: string = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(this.apiURL).pipe( map(response => response.results));
  }
}

