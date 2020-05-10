import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  defaultState: ShellState = {
    inTransit: new Set(),
    mainTitle: ''
  }

  prevState: ShellState = this.defaultState;

  private stateChanged$: BehaviorSubject<ShellState> = new BehaviorSubject(this.defaultState);
  state$: Observable<ShellState> = this.stateChanged$.asObservable();

  constructor() { }

  addUrl(url: string): void {
    this.prevState.inTransit.add(url);
    this.stateChanged$.next(this.prevState);
  }

  removeUrl(url: string): void {
    this.prevState.inTransit.delete(url);
    this.stateChanged$.next(this.prevState);
  }

  update(newState: Partial<ShellState>): void {
    const nextState = { ...this.prevState, ...newState };
    this.stateChanged$.next(nextState);
    this.prevState = nextState;
  }
}

export interface ShellState {
  inTransit: Set<string>,
  mainTitle: string
}
