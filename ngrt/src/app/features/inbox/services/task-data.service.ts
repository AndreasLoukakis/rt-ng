import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  apiURL: string = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(this.apiURL).pipe( map(response => response.results));
  }
}

export interface Movie {
  title: string;// -- The title of this film
  episode_id: number;// -- The episode number of this film.
  opening_crawl: string;// -- The opening paragraphs at the beginning of this film.
  director: string;// -- The name of the director of this film.
  producer: string;// -- The name(s) of the producer(s) of this film. Comma separated.
  release_date: string;// -- The ISO 8601 date format of film release at original creator country.
  species: [];// -- An array of species resource URLs that are in this film.
  starships: [];// -- An array of starship resource URLs that are in this film.
  vehicles: [];// -- An array of vehicle resource URLs that are in this film.
  characters: [];// -- An array of people resource URLs that are in this film.
  planets: [];// -- An array of planet resource URLs that are in this film.
  url: string;// -- the hypermedia URL of this resource.
  created: string;// -- the ISO 8601 date format of the time that this resource was created.
  edited: string;//
}
