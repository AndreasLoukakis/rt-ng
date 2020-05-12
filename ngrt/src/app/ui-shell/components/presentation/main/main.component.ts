import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from './../../../services/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainTitle$: Observable<string>;
  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.mainTitle$ = this.state.state$.pipe(map(state => state.mainTitle))
  }

}
