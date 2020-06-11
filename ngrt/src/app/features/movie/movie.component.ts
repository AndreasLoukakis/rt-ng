import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<any>;
  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.movie$ = this.route.params.pipe(
      map(params => params.id),
      mergeMap(id => this.data.getMovie(id)),
      catchError((err, caught) => {
        console.log('error triggered');
        return undefined;
      })
    );

    // this.movie$.subscribe(
    //   (value) => console.log('next triggered', value),
    //   (err) => console.log('error triggered', err),
    // )
  }

}
