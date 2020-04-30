import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayService, Items } from './../../services/play.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {

  myItems: Items[];
  myItems$: Observable<Items[]>;

  sub: Subscription;


  constructor(private dataService: PlayService) {
    // this.sub = this.dataService.getItems().subscribe(
    //   data => this.myItems = data
    // )

    this.myItems$ = this.dataService.getItems();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onChildEvent(e: string) {
    ++this.myItems.find(item => item.name === e).age;
  }

}

