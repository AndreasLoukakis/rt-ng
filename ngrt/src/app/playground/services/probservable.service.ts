import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProbservableService {

  apiUrl: string = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';
  constructor(private http: HttpClient) { }

  // get as promise
  getAsPromise(items: number): Promise<string[]> {
    return fetch(`${this.apiUrl}${items}`)
      // we are geting a Response type
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      // normally, we would at least check response.status
      // and handle rejection
      .then(response => response.json());
  }

  // getAsPromiseAndTransform(): Promise<any> {
  //   return fetch(this.apiUrl).then((items) => (items as string[]).map(item => `Genre: ${item}`));
  // }

  // get as observable
  getAsObservable(items: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}${items}`)
      // .pipe(shareReplay()); // this will not make the controller observable multicast
  }

}

