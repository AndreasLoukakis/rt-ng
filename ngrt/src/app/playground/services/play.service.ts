import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  items: ItemsInterface[] = [
    { name: 'Andreas', age: 100 },
    { name: 'Antonis', age: 17 }
  ];
  constructor() { }

  getItems(): Observable<ItemsInterface[]> {
    return of(this.items);
  }

}

export interface ItemsInterface {
  name: string;
  age: any;
}
