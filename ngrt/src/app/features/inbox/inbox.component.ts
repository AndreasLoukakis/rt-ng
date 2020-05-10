import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from './services/data.service';
import { Movie } from './interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InboxStateService } from './services/state.service';
import { StateService, ShellState } from './../../ui-shell/services/state.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  items$: Observable<Movie[]>;
  subRouteActive$: Observable<boolean>;

  constructor(
    private dataService: DataService,
    private state: InboxStateService,
    private uiState: StateService
  ) { }

  ngOnInit(): void {

    this.items$ = this.dataService.getMoviesAsObservable();
    this.subRouteActive$ = this.state.state$.pipe(map(s => s.subRouteActive))
    this.uiState.update({mainTitle: 'Inbox'})
  }

}
