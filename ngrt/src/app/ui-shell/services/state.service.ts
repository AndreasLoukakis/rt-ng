import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private defaultState: ShellState = {
    inTransit: new Set()
  }

  private stateChanged$: BehaviorSubject<ShellState> = new BehaviorSubject(this.defaultState);
  state$: Observable<ShellState> = this.stateChanged$.asObservable();

  prevState: ShellState = this.defaultState;
  constructor() { }

  addUrl(url: string) {
    this.prevState.inTransit.add(url);
    this.stateChanged$.next(this.prevState);
  }

  removeUrl(url: string) {
    this.prevState.inTransit.delete(url);
    this.stateChanged$.next(this.prevState);
  }

}

export interface ShellState {
  inTransit: Set<string>
}
