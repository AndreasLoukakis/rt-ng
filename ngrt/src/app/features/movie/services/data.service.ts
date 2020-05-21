import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin, of } from 'rxjs';
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

  deleteItem(itemUrl: string) {
    return of(itemUrl)
  }

  createItem(item: any) {
    return of(item);
  }

  getCollection(urls: string[]): Observable<any[]> {
    return forkJoin(urls.map(url => this.getByUrl(url)))
  }

  getCollectionProps(collection: string) {

    // This might not be the best aproach, an item componnent per collection (with different display modes?)
    // might be a better idea to render collections

    const collectionsMap = {
      characters: [
        {value: 'name', label: 'Name', validations: ['required']},
        {value: 'birth_year', label: 'Birth Year'},
        {value: 'eye_color', label: 'Eye Color'},
        {value: 'gender', label: 'Gender'},
        {value: 'hair_color', label: 'Hair Color'},
        {value: 'height', label: 'Height', validations: ['required']},
        { value: 'skin_color', label: 'Skin' },
        { value: 'url', label: 'ID', validations: ['required']}
      ],
      planets: [
        {value: 'name', label: 'Name', validations: ['required']},
        {value: 'rotation_period', label: 'Rotation period', validations: ['required']},
        {value: 'orbital_period', label: 'Orbital period', validations: ['required']},
        {value: 'diameter', label: 'Diameter'},
        {value: 'climate', label: 'Climate'},
        {value: 'gravity', label: 'Gravity', validations: ['required']},
        {value: 'terrain', label: 'Terrain'},
        { value: 'url', label: 'ID', validations: ['required']}
      ],
      starships: [
        {value: 'name', label: 'Name'},
        { value: 'url', label: 'ID', validations: ['required']}
      ],
      vehicles: [
        {value: 'name', label: 'Name'},
        { value: 'url', label: 'ID', validations: ['required']}
      ],
      species: [
        {value: 'name', label: 'Name'},
        { value: 'url', label: 'ID', validations: ['required']}
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
