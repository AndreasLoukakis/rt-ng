import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from './../../services/state.service';

@Component({
  selector: 'app-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellWrapperComponent implements OnInit {

  inTransit$: Observable<Set<string>>;
  constructor(private state: StateService) {
    this.inTransit$ = this.state.state$.pipe(
      map(newState => newState.inTransit)
    );
  }

  ngOnInit(): void {
  }

}
