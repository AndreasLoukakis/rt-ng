import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlayService {

  response: Response = {
    items: [
      { name: 'Yoda', age: 350 },
      { name: 'Andreas', age: 150 }
    ]
  }
  constructor() { }

  getItems(): Observable<Items[]> {
    return of(this.response).pipe(
      map(resp => resp.items)
    );
  }

}


export interface Response {
  items: Items[]
}

export interface Items {
    name: string;
    age: number;
}
