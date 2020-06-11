import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { StateService, MovieActions } from './services/state.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<any>;
  collections: string[];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private store: StateService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      map(params => params.id),
      tap(id => this.store.actions.emit({ type: MovieActions.GET_MOVIE, payload: id }))
    ).subscribe();

    this.movie$ = this.store.state$.pipe(
      map(state => state.movie),
      tap(movie => movie ? this.collections = Object.keys(movie).filter(key => Array.isArray(movie[key])) : null),
    );


    // this.movie$ = this.route.params.pipe(
    //   map(params => params.id),
    //   mergeMap(id => this.data.getMovie(id)),
    //   tap(movie => this.collections = Object.keys(movie).filter(key => Array.isArray(movie[key]))),
    //   catchError((err, caught) => {
    //     return undefined;
    //   })
    // );

    // this.movie$.subscribe(
    //   (value) => console.log('next triggered', value),
    //   (err) => console.log('error triggered', err),
    // )
  }

}
