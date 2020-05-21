import { Injectable, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces';
import { DataService } from './data.service';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  defaultState: CollectionsState = {
    movie: null,
    selectedCollection: null,
    collections: {
      characters: {
        items: null,
        props: null
      },
      planets: {
        items: null,
        props: null
      },
      starships: {
        items: null,
        props: null
      },
      vehicles: {
        items: null,
        props: null
      },
      species: {
        items: null,
        props: null
      },
    }
  }

  actions: EventEmitter<MovieAction> = new EventEmitter();
  _state$: BehaviorSubject<CollectionsState> = new BehaviorSubject(this.defaultState);
  state$: Observable<CollectionsState> = this._state$.asObservable();

  constructor(private dataService: DataService) {
    from(this.actions).pipe(
      map((action: MovieAction) => this.reducer(this.getState(), action)),
      map((state: CollectionsState) => this.setState(state))
    ).subscribe();
  }

  getState(): CollectionsState {
    return this._state$.getValue();
  }

  setState(nextState: CollectionsState): void {
    if (!nextState) return;
    this._state$.next(nextState);
  }

  select<T>(path: string): Observable<T> {
    return this.state$.pipe(
      map<any, T>(state => {
        const pathParts = path.split('.');
        pathParts.map(part => state = state[part] ? state[part] : null)
        return state;
      })
    )
  }

  reducer(state: CollectionsState, action?: MovieAction) {
    switch (action.type) {

      case MovieActions.GET_MOVIE:
        this.dataService.getMovie(action.payload).pipe(
          take(1),
          map(response => {
            this.actions.emit({ type: MovieActions.GET_MOVIE_SUCCESS, payload: response });
          })
        ).subscribe()
        break;

      case MovieActions.GET_MOVIE_SUCCESS:
        return {
          ...state,
          movie: action.payload
        };

      case MovieActions.DELETE_COLLECTION_ITEM:
        this.dataService.deleteItem(action.payload).pipe(
          take(1),
          map(response => {
            this.actions.emit({ type: MovieActions.DELETE_COLLECTION_ITEM_SUCCESS, payload: response });
          })
        ).subscribe()
        break;

      case MovieActions.DELETE_COLLECTION_ITEM_SUCCESS:
        const filtered = state.collections[state.selectedCollection].items.filter(item => item.url !== action.payload)
        return {
          ...state,
          collections: {
            ...state.collections,
            [state.selectedCollection]: {
              ...state.collections[state.selectedCollection],
              items: filtered,
            }
          }
        };

      case MovieActions.CREATE_COLLECTION_ITEM:
        // here we would call a service and pipe to the response
        this.actions.emit({ type: MovieActions.CREATE_COLLECTION_ITEM_SUCCESS, payload: action.payload });
        break;

      case MovieActions.CREATE_COLLECTION_ITEM_SUCCESS:
        return {
          ...state,
          collections: {
            ...state.collections,
            [state.selectedCollection]: {
              props: [...state.collections[state.selectedCollection].props],
              items: [
                action.payload,
                ...state.collections[state.selectedCollection].items,
              ]
            }
          }
        };

      case MovieActions.UPDATE_COLLECTION_ITEM:

        this.actions.emit({ type: MovieActions.UPDATE_COLLECTION_ITEM_SUCCESS, payload: action.payload });
        break;

      case MovieActions.UPDATE_COLLECTION_ITEM_SUCCESS:
        return {
          ...state,
          collections: {
            ...state.collections,
            [state.selectedCollection]: {
              props: [...state.collections[state.selectedCollection].props],
              items: [
                action.payload,
                ...state.collections[state.selectedCollection].items.filter(item => item.url !== action.payload.url),
              ]
            }
          }
        };

      case MovieActions.GET_MOVIE_COLLECTION:
        this.state$.pipe(map(state => state.movie), take(1)).subscribe(
          movie => {
            if (movie && movie[action.payload]) {
              this.dataService.getCollection(this.getState()?.movie[action.payload]).pipe(
                tap(_ => this.actions.emit({ type: MovieActions.SET_CURRENT_COLLECTION, payload: action.payload })),
                map(response => this.actions.emit({ type: MovieActions.GET_MOVIE_COLLECTION_SUCCESS, payload: response })),
              ).subscribe();
            }
          }
        )
        break;
      case MovieActions.GET_MOVIE_COLLECTION_SUCCESS:
        return {
          ...state,
          collections: {
            ...state.collections,
            [state.selectedCollection]: {
              items: action.payload,
              props: this.dataService.getCollectionProps(state.selectedCollection)
            }
          }
        };
      case MovieActions.SET_CURRENT_COLLECTION:
        return {
          ...state,
          selectedCollection: action.payload
        };
    }

  }
}

export interface CollectionsState {
  movie: Movie;
  selectedCollection: string;
  collections: {
    [name: string]: {
      items: any[],
      props?: any
    }
  };
}

export enum MovieActions {
  GET_MOVIE = '[Movie] Get Movie',
  GET_MOVIE_SUCCESS = '[Movie] Get Movie Success',




  GET_MOVIE_COLLECTION = '[Movie] Get Movie Collection',
  GET_MOVIE_COLLECTION_SUCCESS = '[Movie] Get Movie Collection Success',
  DELETE_COLLECTION_ITEM = '[Movie] Delete Collection Item',
  DELETE_COLLECTION_ITEM_SUCCESS = '[Movie] Delete Collection Item Success',
  CREATE_COLLECTION_ITEM = '[Movie] Create Collection Item',
  CREATE_COLLECTION_ITEM_SUCCESS = '[Movie] Create Collection Item Success',
  UPDATE_COLLECTION_ITEM = '[Movie] Update Collection Item',
  UPDATE_COLLECTION_ITEM_SUCCESS = '[Movie] Update Collection Item Success',
  SET_CURRENT_COLLECTION = '[Movie] Set Current Collection'
}

export interface MovieAction {
  type: string;
  payload?: any;
}
