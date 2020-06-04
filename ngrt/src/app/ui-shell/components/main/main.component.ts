import { Component, OnInit } from '@angular/core';
import { StateService } from './../../services/state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainTitle$: Observable<string>;

  constructor(
    private store: StateService
  ) { }

  ngOnInit(): void {
    this.mainTitle$ = this.store.state$.pipe(
      map(state => state.mainTitle)
    );
  }

}
