import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Movie, Starship, People, Planets, Vehicles } from './../../shared/models';

import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.scss']
})
export class RenderingComponent implements OnInit, OnDestroy {

  movieId: string;
  movie$: Observable<Movie>;
  movieSub: Subscription;
  // sub-collections
  starships$: Observable<Starship[]>;
  characters$: Observable<People[]>;
  planets$: Observable<Planets[]>;
  vehicles$: Observable<Vehicles[]>;

  constructor(
    private route: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    console.log('init parent render')
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movie$ = this.service.getMovie(this.movieId);
    // subscribe to the movie, to get sub-collections
    this.movieSub = this.movie$.subscribe(movieData => {
      this.starships$ = this.service.getCollection<Starship>(movieData.starships);
      this.characters$ = this.service.getCollection<People>(movieData.characters);
      this.planets$ = this.service.getCollection<Planets>(movieData.planets);
      this.vehicles$ = this.service.getCollection<Vehicles>(movieData.vehicles);
    });
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }

}
