import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedInState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedInState$ = this._loggedInState$.asObservable();

  constructor() { }

  login() {
    this._loggedInState$.next(true);
  }

  logout() {
    this._loggedInState$.next(false);
  }
}
