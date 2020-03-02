import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../services/task-data.service';

@Component({
  selector: 'app-list-item-details',
  templateUrl: './list-item-details.component.html',
  styleUrls: ['./list-item-details.component.scss']
})
export class ListItemDetailsComponent implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
