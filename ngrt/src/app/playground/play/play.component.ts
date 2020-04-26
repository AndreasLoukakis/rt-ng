import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DecoTest } from './../decorators/class-deco-signature';
import { Observable } from 'rxjs';
import { PlayService, ItemsInterface } from './../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
@DecoTest('Something')
export class PlayComponent implements OnInit, OnDestroy {

  playProp: string = 'Something';
  items: { name: string, age: any }[] = [
    { name: 'Andreas', age: 100 },
    { name: 'Antonis', age: 17 }
  ];

  items$: Observable<ItemsInterface[]> = this.service.getItems();

  constructor(private service: PlayService) { }

  ngOnInit(): void {
    // a common case would be to call an http or other data service here

    // this.service.getItems().subscribe(data => this.items = data);
  }

  ngOnDestroy() {
  }

  onChildChanged(e: { name: string, age: any }) {
    console.log('got event ', e)
  }

}
