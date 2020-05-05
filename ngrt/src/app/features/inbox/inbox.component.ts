import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { Movie } from './interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  items$: Observable<Movie[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items$ = this.dataService.getMoviesAsObservable();
  }

}
