import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * how would we use it?
 * When injecting the service, we can either:
 * -check the currentBreadcrumb value
 * -subscribe to bcChanged and react to changes
 * -set the current value via updateBreadcrumbs method
 *
 * So, the rendering wraper component (or a route resolver, or...) could set a new bc and the
 * breadcrumb component, subscribing to changes could react and display proper values
 */

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  currentBreadcrumb: any;
  // Subject is like an Observable, but we can also call .next on them
  private bcSubject = new Subject<any>();
  // or use BehaviourSubject and emit an initial value
  private bcBehaviourSubject = new BehaviorSubject({ title: 'Home', url: '/' });

  // provide as an observable, not as subject for the component to consume
  bcChanged$ = this.bcBehaviourSubject.asObservable();

  updateBreadcrumbs(bc: any): void {
    this.currentBreadcrumb = bc;
    this.bcBehaviourSubject.next(bc);
  }

}
