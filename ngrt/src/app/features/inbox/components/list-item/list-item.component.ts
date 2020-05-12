import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces';

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
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
