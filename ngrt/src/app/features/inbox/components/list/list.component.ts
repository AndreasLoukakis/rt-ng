import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './../../../../shared/models/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() movies$: Observable<Movie[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
