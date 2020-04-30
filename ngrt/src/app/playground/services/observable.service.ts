import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * how would we use it?
 * When injecting the service, we can either:
 * -check the current items value
 * -subscribe to itemsChanged and react to changes
 * -set the current value via updateBreadcrumbs method
 */

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  currentItems: any[];
  // Subject is like an Observable, but we can also call .next on them
  private itemsSubject = new Subject<any>();
  // or use BehaviourSubject and emit an initial value, like an empty array
  private itemsBehaviourSubject = new BehaviorSubject([]);

  // provide as an observable, not as subject for the component to consume
  itemsChanged$ = this.itemsBehaviourSubject.asObservable();

  updateItems(items: any): void {
    this.currentItems = items;
    this.itemsBehaviourSubject.next(items);
  }

}
