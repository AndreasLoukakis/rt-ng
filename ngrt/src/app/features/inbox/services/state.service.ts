import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private defaultState: InboxState = {
    subRouteActive: false
  }

  private prevState: InboxState = this.defaultState;

  private behaviourState$: BehaviorSubject<InboxState> = new BehaviorSubject(this.defaultState);
  state$: Observable<InboxState> = this.behaviourState$.asObservable();

  constructor() { }

  update(state: Partial<InboxState>) {
    const newState = { ...this.prevState, ...state };
    this.prevState = newState;
    this.behaviourState$.next(newState);
  }
}

export interface InboxState {
  subRouteActive: boolean;
}
