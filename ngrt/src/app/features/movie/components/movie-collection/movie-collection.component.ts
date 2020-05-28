import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, mergeMap, find, filter, flatMap, merge, shareReplay, share } from 'rxjs/operators';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  items$: Observable<BaseCollectionItem[]>;
  collection$: Observable<string>;
  props$: Observable<{ value: string, label: string, validations?: string[] }[]>;

  showEditor: boolean = false;
  deletedItems: string[] = [];

  selectedItem$: Observable<BaseCollectionItem>;

  refreshed$: Observable<BaseCollectionItem[]>;

  private refresh$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {

    this.collection$ = this.route.params.pipe(
      map(params => params.collection)
    )

    this.props$ = this.collection$.pipe(
      map(collection => this.data.getCollectionProps(collection))
    )

    const movie$ = this.route.parent.params.pipe(
      map(parentParams => parentParams.id),
      mergeMap(movieID => this.data.getMovie(movieID)),
      // step 2
      shareReplay()
    )

    this.items$ = movie$.pipe(
      mergeMap(movie => this.collection$.pipe(
        map(collection => movie[collection]
          // step 2, to handle deleted items
          .filter(url => !this.deletedItems.includes(url))
        )
      )),
      mergeMap(
        urls => forkJoin(urls.map(url => this.data.getByUrl(url))) as Observable<BaseCollectionItem[]>
      )
    )

    // step 2
    this.refreshed$ = this.refresh$.pipe(
      mergeMap(_ => this.items$)
    )

  }

  editItem(item) {
    this.selectedItem$ = this.data.getByUrl(item.url);
    this.showEditor = true;
  }

  onSaveItem(item) {

  }

  onCancel() {
    this.showEditor = false;
  }

  delete(item: any) {
    this.deletedItems.push(item.url);
    this.refresh$.next('');
  }

  refresh() {
    this.refresh$.next('');
  }

}

interface BaseCollectionItem {
  url: string;
  name: string;
}
