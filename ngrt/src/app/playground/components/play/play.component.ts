import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  myItems: { name: string, age: number }[] = [
    { name: 'Yoda', age: 350 },
    { name: 'Andreas', age: 150 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChildEvent(e) {
    console.log(e);
  }

}
