import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { environment } from './../../../../environments/environment';

import { Movie } from './../../../shared/models';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL: string = `${environment.apiUrl}films/`;

  constructor(private http: HttpClient) { }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiURL}${id}`);
  }

  getCollection<T>(urls: string[]): Observable<T[]> {
    // like Promise.all(promisesArray)
    return forkJoin(urls.map(url => this.http.get<T>(url)))
  }
}
