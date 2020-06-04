import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  defaultState: InboxState = {
    subRouteActive: false
  }

  private _state$: BehaviorSubject<InboxState> = new BehaviorSubject(this.defaultState);
  state$: Observable<InboxState> = this._state$.asObservable();

  constructor() { }

  private getState() {
    return this._state$.getValue();
  }

  update(newState: Partial<InboxState>) {
    const nextState = { ...this.getState(), ...newState };
    this._state$.next(nextState);
  }
}

export interface InboxState {
  subRouteActive: boolean;
};
