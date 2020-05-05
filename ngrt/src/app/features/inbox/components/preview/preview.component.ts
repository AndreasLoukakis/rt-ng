import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';

import { People } from './../../interfaces';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  movieId: string;
  characters$: Observable<People[]>;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {  }

  ngOnInit(): void {
    // this will not work
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log(this.movieId);

    this.characters$ = this.route.params.pipe(
      map(params => params.movieId),
      mergeMap(id => this.dataService.getMovie(id)),
      mergeMap(movie => forkJoin(movie.characters.map(url => this.dataService.getByUrl<People>(url)))),
    );
  }

}
