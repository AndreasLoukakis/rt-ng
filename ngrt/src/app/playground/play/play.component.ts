import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DecoTest } from './../decorators/class-deco-signature';
import { Observable } from 'rxjs';
import { PlayService, ItemInterface } from './../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
@DecoTest('Something')
export class PlayComponent implements OnInit, OnDestroy {

  items: { name: string, age: any, img: string }[] = [
    { name: 'Yoda?', age: 300, img: 'https://media4.s-nbcnews.com/j/newscms/2019_47/3112746/191121-baby-yoda-cs-959a_ed40d38efa3cde7ab92df2d5492a81a5.fit-1120w.jpg' },
    { name: 'We are Groot', age: 260, img: 'https://filmschoolrejects.com/wp-content/uploads/2017/05/1JE-Y2KVQgfXYFGAMEeiEDw-700x422.jpeg' }
  ];

  items$: Observable<ItemInterface[]> = this.service.getItems();

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
