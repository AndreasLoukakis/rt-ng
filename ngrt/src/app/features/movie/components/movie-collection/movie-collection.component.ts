import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Observable, forkJoin, BehaviorSubject , interval, of} from 'rxjs';
import { map, mergeMap, shareReplay, debounce } from 'rxjs/operators';
import { Movie } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  items$: Observable<any[]>;
  originalItems$: Observable<any[]>;
  refresh$: BehaviorSubject<any> = new BehaviorSubject('');
  collection$: Observable<string>;
  props$: Observable<{ value: string, label: string, validations?: string[] }[]>;
  movie$: Observable<Movie>;

  selectedItem$: Observable<any>;

  showModal: boolean = false;

  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.collection$ = this.route.params.pipe(
      map(params => params.collection)
    );

    this.props$ = this.collection$.pipe(
      map(collection => this.data.getCollectionProps(collection))
    )

    this.movie$ = this.route.parent.params.pipe(
      map(parentParams => parentParams.id),
      mergeMap(movieID => this.data.getMovie(movieID))
    )

    this.originalItems$ = this.movie$.pipe(
      mergeMap(movie => this.collection$.pipe(
        map(collection => movie[collection])
      )),
      mergeMap(urls => forkJoin(urls.map(url => this.data.getByUrl(url))))
    )

    this.items$ = this.refresh$.pipe(
      debounce(() => interval(300)),
      mergeMap(_ => this.originalItems$)
    )

  }

  refresh() {
    this.refresh$.next('');
  }

  edit(item) {
    this.selectedItem$ = of(item)
    this.showModal = true;
  }

  onItemSave(item) {

  }

  onCancel() {
    this.showModal = false;
  }

}
