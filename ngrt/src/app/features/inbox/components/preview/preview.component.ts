import { Component, OnInit, OnDestroy, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';

import { InboxStateService } from './../../services/state.service';
import { DataService } from './../../services/data.service';
import { People } from './../../interfaces';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  movieId: string;
  items$: Observable<any[]>;

  collection: string = 'species';
  movieTitle: string;
  @ViewChild('species') speciesTpl: TemplateRef<any>;
  @ViewChild('starships') starshipsTpl: TemplateRef<any>;
  @ViewChild('vehicles') vehiclesTpl: TemplateRef<any>;
  @ViewChild('characters') charactersTpl: TemplateRef<any>;
  @ViewChild('planets') planetsTpl: TemplateRef<any>;

  constructor(
    private state: InboxStateService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    // in a redux / ngrx setup, we would just trigger an action:
    // this.state.dispatch(new SomeAction(payload))
    this.state.update({ subRouteActive: true });
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log(this.movieId);

    // phase a, will not work when changing dynamic id
    this.items$ = this.data.getMovie(this.movieId).pipe(
      map(movie => {
        this.movieTitle = movie.title;
        return movie;
      }),
      mergeMap((movie) => forkJoin(
        movie[this.collection].map(url => this.data.getByUrl(url))
      ))
    );

    // phase b, dynamic ids
    this.items$ = this.route.params.pipe(
      map(params => params.id),
      mergeMap(id => this.data.getMovie(id).pipe(map(movie => {
        this.movieTitle = movie.title;
        return movie;
      }))),
      mergeMap((movie) => forkJoin(movie[this.collection].map(url => this.data.getByUrl<People>(url)))),
    );

    // phase c, dynamic collection param
    this.items$ = this.route.params.pipe(
      map(params => {
        Promise.resolve().then(_ => this.collection = params.collection);
        return { movieId: params.movieId, collection: params.collection }
      }),
      mergeMap(params => this.data.getMovie(params.movieId).pipe(map(movie => {
        this.movieTitle = movie.title;
        return { movie, params };
      }))),
      mergeMap(({movie, params}) => forkJoin(movie[params.collection].map(url => this.data.getByUrl<People>(url)))),
    );
  }

  ngOnDestroy() {
    this.state.update({ subRouteActive: false });
  }

  selectTemplate() {
    return this[this.collection + 'Tpl'];
  }

}
