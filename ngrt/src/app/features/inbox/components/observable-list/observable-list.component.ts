import { Component, OnInit } from '@angular/core';
import { Movie } from './../../interfaces'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.scss']
})
export class ObservableListComponent implements OnInit {

  items$: Observable<Movie[]>
  items: Movie[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items$ = this.dataService.getMoviesAsObservable()
      .pipe(shareReplay());
    // this.dataService.getMoviesAsObservable().subscribe(
    //   data => this.items = data
    // )

    // const subscription = this.dataService.getMoviesAsObservable()
    //   .pipe(
    //     map(....)
    //   )
      // .subscribe(
      //   data => this.items = data
      // )
  }

}
