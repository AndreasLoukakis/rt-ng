import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../shared/interfaces'

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-promise-list',
  templateUrl: './promise-list.component.html',
  styleUrls: ['./promise-list.component.scss']
})
export class PromiseListComponent implements OnInit {

  items: Promise<Movie[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getMoviesAsPromise();

    // this.dataService.getMoviesAsPromise().then(
    //   console.log
    // )
    // .catch(console.log)
  }

}
