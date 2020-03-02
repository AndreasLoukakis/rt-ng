import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../services/task-data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() movie: Movie;
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('movie is ', this.movie)
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
