import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayService, Items } from './../../services/play.service';
import { Observable, Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {

  myItems: Items[];
  myItems$: Observable<Items[]>;

  incrementEvents: BehaviorSubject<string> = new BehaviorSubject('Yoda');

  sub: Subscription;


  constructor(private dataService: PlayService) {
    // this.sub = this.dataService.getItems().subscribe(
    //   data => this.myItems = data
    // )

    // this.myItems$ = this.dataService.getItems();

    this.myItems$ = combineLatest(
      this.dataService.getItems(),
      this.incrementEvents
    ).pipe(
      map( ([items, name]) => items.map(item => {
          if (item.name === name) item.age++
          return item;
        })
      )
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onChildEvent(e: string) {
    // ++this.myItems.find(item => item.name === e).age;
    this.incrementEvents.next(e);
  }

}

