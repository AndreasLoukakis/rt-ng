import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StateService as UIState } from './../../ui-shell/services/state.service';
import { DataService } from './services/data.service';
import { Movie } from './../../shared/interfaces';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(
    private UIState: UIState,
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(params => params.id),
      mergeMap(movieId => this.data.getMovie(movieId)),
      tap(movie => this.UIState.update({ mainTitle: movie.title })),
      shareReplay()
    )
  }

}
