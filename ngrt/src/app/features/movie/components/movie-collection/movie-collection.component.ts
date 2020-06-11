import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { DataService } from './../../services/data.service';
import { StateService, MovieActions, CollectionsState } from './../../services/state.service';
import { Movie } from './../../../../shared/interfaces';

@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  movie$: Observable<Movie>;
  items$: Observable<BaseCollectionItem[]>;
  collection$: Observable<string>;
  props$: Observable<{ value: string, label: string, validations?: string[] }[]>;

  createMode: boolean = false;
  showEditor: boolean = false;

  selectedItem$: Observable<BaseCollectionItem>;

  private refresh$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private store: StateService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      tap(params => {
        if (!params || !params.collection) return;

        this.movie$ = this.store.select<Movie>('movie');
        this.items$ = this.store.select(`collections.${params.collection}.items`);
        this.props$ = this.store.select(`collections.${params.collection}.props`);
        this.collection$ = this.store.select('selectedCollection');

        this.store.actions.emit({
          type: MovieActions.GET_MOVIE_COLLECTION,
          payload: params.collection
        })
      })
    ).subscribe()

  }

  editItem(item) {
    this.selectedItem$ = this.data.getByUrl(item.url);
    this.showEditor = true;
  }

  createItem() {
    this.createMode = true;
    this.selectedItem$ = this.props$.pipe(
      map(this.createObjectFromProps)
    )
    this.showEditor = true;
  }

  onSaveItem(item) {
    const action = this.createMode ?
      { type: MovieActions.CREATE_COLLECTION_ITEM, payload: item } :
      { type: MovieActions.UPDATE_COLLECTION_ITEM, payload: item };

    this.store.actions.emit(action);
    this.createMode = false;
    this.showEditor = false;
  }

  onCancel() {
    this.showEditor = false;
  }

  delete(item: any) {
    this.store.actions.emit({ type: MovieActions.DELETE_COLLECTION_ITEM, payload: item.url})
  }

  refresh() {
    this.refresh$.next('');
  }

  createObjectFromProps(props: { value: string, label: string, validations?: string[] }[]) {
    return props.reduce((all, cur) => {
      all[cur.value] = '';
      return all;
    }, {}) as BaseCollectionItem
  }

}

interface BaseCollectionItem {
  url: string;
  name: string;
}
