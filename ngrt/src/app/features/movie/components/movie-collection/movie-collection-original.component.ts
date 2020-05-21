import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, mergeMap, tap, filter, flatMap, merge, shareReplay, share } from 'rxjs/operators';

import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  items$: Observable<BaseCollectionItem[]>;
  collection: string;
  props: { value: string, label: string }[];

  showEditor: boolean = false;
  deletedItems: string[] = [];
  private deletedItemsState$: BehaviorSubject<string[]> = new BehaviorSubject(this.deletedItems);
  filteredItems$: Observable<BaseCollectionItem[]>;

  manualRefresh$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {

    this.items$ = this.route.params.pipe(
      map(params => params.collection),
      // OK but these are side effects... try to avoid!!!
      // maybe move this to some state?
      // or return an object with all needed properties in the end
      tap(collection => {
        this.collection = collection;
        this.props = this.data.getCollectionProps(collection);
      }),
      mergeMap(collection => {
        return this.route.parent.params.pipe(
          map(parentParams => ({ movieID: parentParams.id, collection }))
        )
      }),
      mergeMap(({ movieID, collection }) => this.data.getMovie(movieID).pipe(map(movie => movie[collection]))),
      // maybe add a map here to filter not deleted urls
      mergeMap(
          urls => forkJoin(
            urls.map(url => this.data.getByUrl(url))
          ) as Observable<BaseCollectionItem[]>
      ),
      // shareReplay()
    )

    // this.filteredItems$ = combineLatest(
    //   this.items$,
    //   this.deletedItemsState$,
    //   this.manualRefresh$
    // ).pipe(
    //   map( ([items, deletedUrls, _]) => items.filter(item => !deletedUrls.includes(item.url)))
    // )

    this.filteredItems$ = this.manualRefresh$.pipe(
      merge(this.deletedItemsState$),
      mergeMap(_ => this.items$),
      map(items => items.filter(item => !this.deletedItems.includes(item.url))),
      shareReplay()
    )

  }

  editItem(item) {
    this.showEditor = true;
  }

  onSaveItem(item) {

  }

  onCancel() {
    this.showEditor = false;
  }

  delete(item: any) {
    this.deletedItems.push(item.url);
    this.deletedItemsState$.next(this.deletedItems);
    // this.manualRefresh$.next('');
  }

}

interface BaseCollectionItem {
  url: string;
  name: string;
}
