import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms'
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

  // template forms data
  user: User = new User();

  // reactive forms data
  middleName = new FormControl('asf', [Validators.pattern(/[0-9 ]/g), Validators.required]);
  @ViewChild('name') tplFormName: NgModel;

  myData = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('Skywalker'),
    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl('')
    // })
  });


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

  ngAfterViewInit() {
    console.log(this.tplFormName)
  }

  onChildEvent(e: string) {
    // ++this.myItems.find(item => item.name === e).age;
    this.incrementEvents$.next(e);
  }

  onSubmitTemplateBased(data) {
    console.log(data)
  }

  onSubmitReactive(data) {
    console.log(data)
  }

}


export class User {
  public firstName: string;
  public lastName: string;
}
