import { Component, OnInit, OnDestroy, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';

import { StateService } from './../../services/state.service';
import { DataService } from './../../services/data.service';

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
    private state: StateService,
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

    this.items$ = this.route.params.pipe(
      map(params => {
        Promise.resolve().then(_ => this.collection = params.collection);
        return { movieId: params.id, collection: params.collection }
      }),
      mergeMap(params => this.data.getMovie(params.movieId).pipe(map(movie => {
        this.movieTitle = movie.title;
        return { movie, params };
      }))),
      mergeMap(({movie, params}) => forkJoin(movie[params.collection].map(url => this.data.getByUrl<any>(url)))),
    );
  }

  ngOnDestroy() {
    this.state.update({ subRouteActive: false });
  }

  selectTemplate() {
    return this[this.collection + 'Tpl']
  }

}
