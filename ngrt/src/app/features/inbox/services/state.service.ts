import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboxStateService {

  private defaultState: InboxState = {
    subRouteActive: false
  };
  private prevState: InboxState = this.defaultState;
  private behaviourState = new BehaviorSubject(this.defaultState);

  state$ = this.behaviourState.asObservable();

  update(state: Partial<InboxState>): void {
    const newState = { ...this.prevState, ...state };
    this.prevState = newState;
    this.behaviourState.next(newState);
  }

}

export interface InboxState {
  subRouteActive: boolean;
}
