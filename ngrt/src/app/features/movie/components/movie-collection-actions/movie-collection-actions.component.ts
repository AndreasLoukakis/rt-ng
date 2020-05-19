import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-collection-actions',
  templateUrl: './movie-collection-actions.component.html',
  styleUrls: ['./movie-collection-actions.component.scss']
})
export class MovieCollectionActionsComponent implements OnInit {

  @Input() actions: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
