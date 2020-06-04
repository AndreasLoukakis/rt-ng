import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { StateService } from './../../services/state.service';
import { DataService  } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { promise } from 'protractor';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  // movieId: string;
  items$: Observable<any>;
  collection = 'characters';
  movieTitle: string;

  @ViewChild('species') speciesTpl: TemplateRef<any>;
  @ViewChild('starships') starshipsTpl: TemplateRef<any>;
  @ViewChild('vehicles') vehiclesTpl: TemplateRef<any>;
  @ViewChild('characters') charactersTpl: TemplateRef<any>;
  @ViewChild('planets') planetsTpl: TemplateRef<any>;

  constructor(
    private store: StateService,
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.store.update({ subRouteActive: true });

    // this.movieId = this.route.snapshot.paramMap.get('id');
    // console.log('movie id is ', this.movieId)

    // this.items$ = this.route.params.pipe(
    //   map(params => params.id),
    //   mergeMap(id => this.data.getMovie(id)),
    //   tap(movie => this.movieTitle = movie.title),
    //   mergeMap(movie => forkJoin(
    //     movie[this.collection].map(url => this.data.getByUrl(url))
    //   ))
    // );

    this.items$ = this.route.params.pipe(
      map(params => {
        this.collection = params.collection;
        return { movieId: params.id, collection: params.collection }
      }),
      mergeMap(({ movieId, collection }) => this.data.getMovie(movieId)
        .pipe(
          map(movie => {
            this.movieTitle = movie.title;
            return { movie, collection };
          })
        )
      ),
      mergeMap(({movie, collection}) => forkJoin(
        movie[collection].map(url => this.data.getByUrl(url))
      ))
    );
  }


  ngOnDestroy() {
    this.store.update({ subRouteActive: false });
  }

  selectTemplate() {
    return this[this.collection + 'Tpl'];
  }

}
