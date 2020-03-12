import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from './../../shared/models/movie';

import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.scss']
})
export class RenderingComponent implements OnInit {

  movieId: string;
  movie$: Observable<Movie>;
  constructor(
    private route: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movie$ = this.service.getMovie(this.movieId);
  }

}
