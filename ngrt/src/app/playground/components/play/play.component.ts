import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { PlayService, Items } from './../../services/play.service';
import { Observable, Subscription, combineLatest, BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {

  myItems: Items[];
  myItems$: Observable<Items[]>;

  sub: Subscription;

  incrementEvents$: BehaviorSubject<string> = new BehaviorSubject('');


  constructor(private dataService: PlayService) {
    // this.sub = this.dataService.getItems().subscribe(
    //   data => this.myItems = data
    // )

    // this.myItems$ = this.dataService.getItems();

    this.myItems$ = combineLatest(
      this.dataService.getItems(),
      this.incrementEvents$
    ).pipe(
      map(([items, name]) => items.map(item => {
        if (item.name === name) item.age++;
        return item;
      })),
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onChildEvent(e: string) {
    // ++this.myItems.find(item => item.name === e).age;
    this.incrementEvents$.next(e);
  }

}
