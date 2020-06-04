import { Component, OnInit } from '@angular/core';
import { StateService } from './../../services/state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss']
})
export class ShellWrapperComponent implements OnInit {

  inTransit$: Observable<Set<string>>;
  constructor(
    private store: StateService
  ) { }

  ngOnInit(): void {
    this.inTransit$ = this.store.state$.pipe(
      map(state => state.inTransit)
    )
  }

}
