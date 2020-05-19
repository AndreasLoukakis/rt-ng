import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, fromEventPattern } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Movie } from './../../shared/interfaces';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;
  collections: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(params => params.id),
      mergeMap(movieId => this.data.getMovie(movieId)),
      tap(movie => this.collections = Object.keys(movie).filter(key => Array.isArray(movie[key])))
    )
  }

}
