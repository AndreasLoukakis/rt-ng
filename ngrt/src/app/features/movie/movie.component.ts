import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StateService as UIState } from './../../ui-shell/services/state.service';
import { DataService } from './services/data.service';
import { Movie } from './../../shared/interfaces';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, shareReplay } from 'rxjs/operators';

// with state
import { StateService, MovieActions } from './services/state.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;
  collections: string[];

  constructor(
    private UIState: UIState,
    private route: ActivatedRoute,
    private data: DataService,
    private store: StateService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      map(params => {
        if (!params || !params.id) return;
        this.store.actions.emit({ type: MovieActions.GET_MOVIE, payload: params.id })
      })
    ).subscribe()

    this.movie$ = this.store.state$.pipe(
      map(state => state?.movie),
      tap(movie => this.UIState.update({ mainTitle: movie?.title })),
      tap(movie => this.collections = movie ? Object.keys(movie).filter(key => Array.isArray(movie[key])) : []),
    )
    //   this.route.params.pipe(
    //   map(params => params.id),
    //   mergeMap(movieId => this.data.getMovie(movieId)),
    //   tap(movie => this.UIState.update({ mainTitle: movie.title })),
    //   tap(movie => this.collections = Object.keys(movie).filter(key => Array.isArray(movie[key]))),
    //   shareReplay()
    // );
  }


}
