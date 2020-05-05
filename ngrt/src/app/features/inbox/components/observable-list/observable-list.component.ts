import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService} from './../../services/data.service';

import { Movie } from './../../interfaces';

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.scss']
})
export class ObservableListComponent implements OnInit {

  items$: Observable<Movie[]>;

  // event stream
  @ViewChild('obsClicks') btn: ElementRef<HTMLButtonElement>;
  clicks$: Observable<Event>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this is lazy loaded
    // no subscription, no http. Many subs, many https
    // unless we define as shared
    this.items$ = this.dataService.getMoviesAsObservable()
    // make it multicast. Cant do it in the service
      // .pipe(shareReplay());
    // error handling in pipe. error and caught (original observable, to retry)
    .pipe(
      catchError((error, caught) => caught)
      // could also use retry or retryWhen
    )

    // if registering to an observable, we get back a way to unsubscribe
    // this is the observable
    const subscription = this.dataService.getMoviesAsObservable()
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
      next: event => console.log('MayDay', event),
      error: err => console.log(err),
      complete: () => console.log('done') // NEVER!!!
    })

    this.clicks$.subscribe(e => console.log(e.target))

  }

}
