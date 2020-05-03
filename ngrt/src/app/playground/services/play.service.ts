import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  response: ItemsResponse = {
    items: [
      { name: 'Yoda?', age: 300, img: 'https://media4.s-nbcnews.com/j/newscms/2019_47/3112746/191121-baby-yoda-cs-959a_ed40d38efa3cde7ab92df2d5492a81a5.fit-1120w.jpg' },
      { name: 'We are Groot', age: 260, img: 'https://filmschoolrejects.com/wp-content/uploads/2017/05/1JE-Y2KVQgfXYFGAMEeiEDw-700x422.jpeg' }
    ]
  };
  constructor() { }

  getItems(): Observable<ItemInterface[]> {
    // return this.http.get(...).pipe(...)
    return of(this.response).pipe(
      map(response => response.items)
    )
  }

}

export interface ItemsResponse {
  items: ItemInterface[]
}

export interface ItemInterface {
  name: string;
  age: number;
  img?: string;
}
