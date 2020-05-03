import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { ProbservableService } from '../../services/probservable.service';
import { Observable, fromEvent, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, AfterViewInit {

  promiseItems: Promise<string[]>;
  observableItems$: Observable<string[]>;

  // event stream
  @ViewChild('obsClicks') btn: ElementRef<HTMLButtonElement>;
  clicks$: Observable<Event>;

  constructor(
    private service: ProbservableService,
  ) { }

  ngOnInit(): void {
    // this is eager loaded
    this.promiseItems = this.service.getAsPromise(10);

    // this is lazy loaded
    // no subscription, no http. Many subs, many https
    // unless we define as shared
    this.observableItems$ = this.service.getAsObservable(10)
      // make it multicast. Cant do it in the service
      // .pipe(shareReplay());

    // if registering to an observable, we get back a way to unsubscribe
    // this is the observable
    const subscription = this.service.getAsObservable(10)
      .subscribe(
        // this is now the observer
        {
          next: console.log,
          error: console.log,
          complete: () => console.log('done')
        }
    )
    // or nextFn, errorFn, completeFn
      // or just
      // .subscribe(data => console.log(data))

    subscription.unsubscribe();

  }

  ngAfterViewInit() {
    // An observable stream of clicks
    // the event listener, will not be setup if noone subscribes
    this.clicks$ = fromEvent(this?.btn?.nativeElement, 'click');

    this.clicks$.subscribe({
      next: event => console.log(event),
      error: err => console.log(err),
      complete: () => console.log('done') // NEVER!!!
    })

    this.clicks$.subscribe(e => console.log(e.target))

  }

}
