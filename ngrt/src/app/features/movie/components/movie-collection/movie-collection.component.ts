import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  items$: Observable<any[]>;

  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // we still need: collection and props.
    // we could "tap" in and assign them, or...

    this.items$ = this.route.params.pipe(
      map(props => (props.collection)),
      mergeMap(collection => {
        return this.route.parent.params.pipe(
          map(parentParams => ({ movieID: parentParams.id, collection }))

        );
      }),
      mergeMap(({ movieID, collection }) => {
        return this.data.getMovie(movieID).pipe(map(movie => movie[collection]))
      }),
      mergeMap(
        urls => forkJoin(
          urls.map(url => this.data.getByUrl(url))
        )
      )
    )
  }

}
