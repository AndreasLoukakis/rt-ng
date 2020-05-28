import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  getData() {
    console.log('function called');
    return of([
      {name: 'Andreas', lastName: 'Loukakis'},
      {name: 'Kostas', lastName: 'Papaddopoulos'},
      {name: 'George', lastName: 'Georgiou'},
    ]);
  }
}
