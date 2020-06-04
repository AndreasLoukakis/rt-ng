import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  defaultState: ShellState = {
    inTransit: new Set(),
    mainTitle: 'No title provided'
  };

  private _state$: BehaviorSubject<ShellState> = new BehaviorSubject(this.defaultState);
  state$: Observable<ShellState> = this._state$.asObservable();

  constructor() { }

  private getCurrentState(): ShellState {
    return this._state$.getValue();
  }

  addUrl(url: string) {
    const oldState = this.getCurrentState();
    oldState.inTransit.add(url);
    this._state$.next({ ...oldState });
  }

  removeUrl(url: string) {
    const oldState = this.getCurrentState();
    oldState.inTransit.delete(url);
    this._state$.next({ ...oldState });
  }

  update(newstate: Partial<ShellState>) {
    const nextState = { ...this.getCurrentState(), ...newstate };
    this._state$.next(nextState);
  }

}

export interface ShellState {
  inTransit: Set<string>;
  mainTitle: string;
}
