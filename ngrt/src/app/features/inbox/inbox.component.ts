import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Movie } from './services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  items$: Observable<Movie[]>;
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.items$ = this.data.getMoviesAsObservable();
  }

}
