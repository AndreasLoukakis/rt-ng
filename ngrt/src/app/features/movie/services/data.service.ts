import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './../../../shared/interfaces';

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

  getByUrl<T>(url: string): Observable<T> {
    return this.http.get<any>(url);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiURL}films/${id}`);
  }

  getCollectionProps(collection: string) {

    // This might not be the best aproach, an item componnent per collection (with different display modes?)
    // might be a better idea to render collections

    const collectionsMap = {
      characters: [
        {value: 'name', label: 'Name'},
        {value: 'birth_year', label: 'Birth Year'},
        {value: 'eye_color', label: 'Eye Color'},
        {value: 'gender', label: 'Gender'},
        {value: 'hair_color', label: 'Hair Color'},
        {value: 'height', label: 'Height'},
        {value: 'skin_color', label: 'Skin'},
      ],
      planets: [
        {value: 'name', label: 'Name', validations: ['required']},
        {value: 'rotation_period', label: 'Rotation period', validations: ['required']},
        {value: 'orbital_period', label: 'Orbital period', validations: ['required']},
        {value: 'diameter', label: 'Diameter'},
        {value: 'climate', label: 'Climate'},
        {value: 'gravity', label: 'Gravity', validations: ['required']},
        {value: 'terrain', label: 'Terrain'},
      ],
      starships: [
        {value: 'name', label: 'Name'},
      ],
      vehicles: [
        {value: 'name', label: 'Name'},
      ],
      species: [
        {value: 'name', label: 'Name'},
      ]

    }

    return collectionsMap[collection] ?? [];
  }
}

export interface MovieResponse {
  count: number;
  previous: string;
  next: string;
  results: Movie[];
}
