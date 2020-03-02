import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDataService, Movie } from './services/task-data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  movies$: Observable<Movie[]>;
  constructor(private service: TaskDataService) { }

  ngOnInit(): void {
    this.movies$ = this.service.getMovies();
  }

}
