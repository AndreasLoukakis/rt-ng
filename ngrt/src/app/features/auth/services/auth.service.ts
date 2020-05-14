import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedIn: Observable<boolean> = this.loggedInState$.asObservable();

  constructor() { }

  login() {
    this.loggedInState$.next(true);
  }

  logout() {
    this.loggedInState$.next(false);
  }
}
