import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { DataService } from './services/data.service';
import { Movie } from '../../shared/interfaces'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from './services/state.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  items$: Observable<Movie[]>;
  subrouteActive$: Observable<boolean>;

  constructor(
    private dataService: DataService,
    private state: StateService
  ) { }

  @ViewChild('loading') mytpl: TemplateRef<any>;

  ngOnInit(): void {
    this.items$ = this.dataService.getMoviesAsObservable();
    this.subrouteActive$ = this.state.state$.pipe( map(state => state.subRouteActive))
  }

}
