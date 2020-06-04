import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Movie } from './services/data.service';
import { StateService as UIStateService } from './../../ui-shell/services/state.service';
import { StateService } from './services/state.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  items$: Observable<Movie[]>;
  subRouteActive$: Observable<boolean>;
  constructor(
    private data: DataService,
    private uiStore: UIStateService,
    private store: StateService
  ) { }

  ngOnInit(): void {
    this.subRouteActive$ = this.store.state$.pipe(map(state => state.subRouteActive));
    this.uiStore.update({ mainTitle: 'Welcome to Inbox' });
    this.items$ = this.data.getMoviesAsObservable();

  }

}
