import { Component, OnInit } from '@angular/core';
import { DataService, Movie } from './../../services/data.service';


@Component({
  selector: 'app-promise-list',
  templateUrl: './promise-list.component.html',
  styleUrls: ['./promise-list.component.scss']
})
export class PromiseListComponent implements OnInit {

  movie: Promise<Movie[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    // this.movie = this.data.getMoviesAsPromise();
  }

}
