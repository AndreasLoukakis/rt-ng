import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PlayService } from './../../services/play.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() data: string[];
  @Output() dataChanged: EventEmitter<string> = new EventEmitter();

  sub: Subscription;

  dataFromService$: Observable<{name: string, lastName: string}[]>;
  dataFromService: { name: string, lastName: string }[];

  constructor(
    private playService: PlayService
  ) { }

  async ngOnInit() {



    this.dataFromService =  await this.playService.getData().toPromise();
    // this.sub = this.playService.getData().subscribe(
    //   data => this.dataFromService = data
    // );

    // [items[], users[]]
    // const users$ = this.dataFromService$.pipe(
    //   map(data => data.users)
    // )
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onClick() {
    this.dataChanged.emit('the value is emited');
  }

}
