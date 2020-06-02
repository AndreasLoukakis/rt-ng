import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, Movie } from './../../services/data.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { shareReplay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.scss']
})
export class ObservableListComponent implements OnInit, OnDestroy {

  movie$: Observable<Movie[]>;
  movies: Movie[];
  sub: Subscription;
  buttonClick$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.buttonClick$.pipe(
      mergeMap(e => this.data.getMoviesAsObservable()),
      // shareReplay()
    );

    // this.lookup$ = this.data.getDeal(6).pipe(
    //   mergeMap(deal => {
    //     const lookup = deals[0].mylookup;
    //     return { deal, lookup: this.data.getLookup(lookup) }
    //   }),
    //   map(({deal, lookup}) => deal.lookups.push(lookup))
    // )


    // this.sub = this.data.getMoviesAsObservable()
    //   .subscribe(
    //     {
    //       next: console.log,
    //       error: (param) => console.log(param),
    //       complete: () => console.log('it is completed')
    //     }
    //   )
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  buttonClick(e) {
    this.buttonClick$.next(e);
  }

}
